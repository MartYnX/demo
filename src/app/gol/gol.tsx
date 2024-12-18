'use client'

import React, { useEffect, useRef, useState, useCallback } from 'react';
import './gol.css';

interface GameOfLifeConfig {
    canvas: HTMLCanvasElement;
    unitSize: number;
    columns: number;
    lines: number;
    gridSize: number;
    setGeneration: React.Dispatch<React.SetStateAction<number>>;
    setLifeCell: React.Dispatch<React.SetStateAction<number>>;
    setSpeed: React.Dispatch<React.SetStateAction<number>>;
}

class GameOfLifeClass {
    private canvas: HTMLCanvasElement;
    private offscreenCanvas: OffscreenCanvas;
    private unitSize: number;
    private columns: number;
    private lines: number;
    private gridSize: number;
    private width: number;
    private height: number;
    private ctx: CanvasRenderingContext2D;
    private offscreenCtx: OffscreenCanvasRenderingContext2D;
    private state: Uint8Array;
    private nextState: Uint8Array;
    private gameOn: boolean;
    private counter: number;
    private lifeCell: number;
    private setGeneration: React.Dispatch<React.SetStateAction<number>>;
    private setLifeCell: React.Dispatch<React.SetStateAction<number>>;
    private setSpeed: React.Dispatch<React.SetStateAction<number>>;
    private lastTime: number = 0;
    private fps: number = 30;

    constructor(config: GameOfLifeConfig) {
        this.canvas = config.canvas;
        this.unitSize = config.unitSize;
        this.columns = config.columns;
        this.lines = config.lines;
        this.gridSize = config.gridSize;
        this.width = this.canvas.width = this.unitSize * this.columns;
        this.height = this.canvas.height = this.unitSize * this.lines;
        this.ctx = this.canvas.getContext('2d', { alpha: false })!;
        this.offscreenCanvas = new OffscreenCanvas(this.width, this.height);
        this.offscreenCtx = this.offscreenCanvas.getContext('2d', { alpha: false })!;
        this.state = new Uint8Array(this.columns * this.lines);
        this.nextState = new Uint8Array(this.columns * this.lines);
        this.gameOn = false;
        this.counter = 0;
        this.lifeCell = 0;
        this.setGeneration = config.setGeneration;
        this.setLifeCell = config.setLifeCell;
        this.setSpeed = config.setSpeed;

        this.drawGrid();
    }

    init() {
        this.state.fill(0);
        this.nextState.fill(0);
    }

    randomDraft() {
        for (let i = 0; i < this.state.length; i++) {
            this.state[i] = Math.random() < 0.075 ? 1 : 0;
        }
        this.nextState.set(this.state);
        this.counter = 0;
    }

    update() {
        for (let y = 0; y < this.lines; y++) {
            for (let x = 0; x < this.columns; x++) {
                const i = y * this.columns + x;
                const neighbors = this.countNeighbors(x, y);
                this.nextState[i] = (this.state[i] && (neighbors === 2 || neighbors === 3)) || (!this.state[i] && neighbors === 3) ? 1 : 0;
            }
        }
        [this.state, this.nextState] = [this.nextState, this.state];
        this.counter++;
    }

    countNeighbors(x: number, y: number): number {
        let count = 0;
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue;
                const nx = (x + dx + this.columns) % this.columns;
                const ny = (y + dy + this.lines) % this.lines;
                count += this.state[ny * this.columns + nx];
            }
        }
        return count;
    }

    draw() {
        this.offscreenCtx.drawImage(this.canvas, 0, 0);
        this.lifeCell = 0;
        for (let y = 0; y < this.lines; y++) {
            for (let x = 0; x < this.columns; x++) {
                const i = y * this.columns + x;
                if (this.state[i]) {
                    this.lifeCell++;
                    this.offscreenCtx.fillStyle = 'rgba(236,64,122,1)';
                    this.offscreenCtx.fillRect(x * this.unitSize, y * this.unitSize, this.unitSize, this.unitSize);
                } else {
                    this.offscreenCtx.clearRect(x * this.unitSize, y * this.unitSize, this.unitSize, this.unitSize);
                }
            }
        }
        this.ctx.drawImage(this.offscreenCanvas, 0, 0);
    }

    addUnit(x: number, y: number) {
        const i = Math.floor(y / this.unitSize) * this.columns + Math.floor(x / this.unitSize);
        this.state[i] = this.state[i] ? 0 : 1;
    }

    gg() {
        this.gameOn = !this.gameOn;
    }

    start() {
        this.init();
        this.draw();
        this.animate();
    }

    animate(currentTime: number = 0) {
        const elapsed = currentTime - this.lastTime;
        if (elapsed > 1000 / this.fps) {
            this.tick();
            this.lastTime = currentTime;
        }
        requestAnimationFrame(this.animate.bind(this));
    }

    tick() {
        if (this.gameOn) this.update();
        this.draw();
        this.setGeneration(this.counter);
        this.setLifeCell(this.lifeCell);
        this.setSpeed(Math.round(1000 / this.fps));
    }

    drawGrid() {
        this.ctx.strokeStyle = 'rgba(66,66,66,.2)';
        for (let i = 0; i <= this.columns; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(i * this.unitSize - 0.5, 0);
            this.ctx.lineTo(i * this.unitSize - 0.5, this.height);
            this.ctx.stroke();
        }
        for (let i = 0; i <= this.lines; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, i * this.unitSize - 0.5);
            this.ctx.lineTo(this.width, i * this.unitSize - 0.5);
            this.ctx.stroke();
        }
        this.ctx.strokeStyle = 'rgba(66,66,66,.7)';
        for (let i = 0; i <= this.columns; i += this.gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(i * this.unitSize - 0.5, 0);
            this.ctx.lineTo(i * this.unitSize - 0.5, this.height);
            this.ctx.stroke();
        }
        for (let i = 0; i <= this.lines; i += this.gridSize) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, i * this.unitSize - 0.5);
            this.ctx.lineTo(this.width, i * this.unitSize - 0.5);
            this.ctx.stroke();
        }
    }

    reset() {
        this.init();
        this.gameOn = false;
        this.counter = 0;
        this.lifeCell = 0;
        this.draw();
    }
}

const GameOfLife: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [generation, setGeneration] = useState(0);
    const [lifeCell, setLifeCell] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [gameOn, setGameOn] = useState(false);
    const [gameOfLife, setGameOfLife] = useState<GameOfLifeClass | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const newGameOfLife = new GameOfLifeClass({
            canvas,
            unitSize: 4,
            columns: 180,
            lines: 120,
            gridSize: 4,
            setGeneration,
            setLifeCell,
            setSpeed
        });

        setGameOfLife(newGameOfLife);
        newGameOfLife.start();

        return () => {
            // Cleanup if needed
        };
    }, []);

    const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!gameOfLife) return;
        const rect = e.currentTarget.getBoundingClientRect();
        gameOfLife.addUnit(e.clientX - rect.left, e.clientY - rect.top);
    }, [gameOfLife]);

    const handleStart = useCallback(() => {
        if (gameOfLife) {
            gameOfLife.gg();
            setGameOn(!gameOn);
        }
    }, [gameOfLife, gameOn]);

    const handleCreateWorld = useCallback(() => {
        if (gameOfLife) {
            gameOfLife.randomDraft();
        }
    }, [gameOfLife]);

    const handleReset = useCallback(() => {
        if (gameOfLife) {
            gameOfLife.reset();
            setGameOn(false);
        }
    }, [gameOfLife]);

    return (
        <div id="game">
            <div className="control-panel">
                <div className="logo-container">
                    <div className="logo"></div>
                </div>
                <a href="#" className="ctrl-button" id="ctrl_1" onClick={handleStart}>
                    {gameOn ? 'Stop' : 'Start'}
                </a>
                <a href="#" className="ctrl-button" id="ctrl_2" onClick={handleCreateWorld}>
                    Create world
                </a>
                <a href="#" className="ctrl-button" id="ctrl_3" onClick={handleReset}>
                    Reset
                </a>
            </div>

            <canvas ref={canvasRef} id="world" onClick={handleCanvasClick}>
                {/* Hello World :) */}
            </canvas>

            <div className="info-panel">
                <span className="info_generation">Generation: </span>
                <span id="info_generation">{generation}</span>

                <span className="separator">|</span>
                <span className="info_life-cell">Life cell: </span>
                <span id="info_life-cell">{lifeCell}</span>

                <span className="separator">|</span>
                <span className="info_speed">Speed: </span>
                <span id="info_speed">{speed}</span>
                <span>ms</span>
            </div>
        </div>
    );
};

export default GameOfLife;
