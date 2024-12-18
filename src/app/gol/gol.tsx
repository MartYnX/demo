'use client'

import './gol.css'
import React, { useState, useCallback, useRef, useEffect } from 'react';

const numRows = 30;
const numCols = 50;

const generateEmptyGrid = () => {
    return Array.from({ length: numRows }, () => Array(numCols).fill(false));
};

const generateRandomGrid = () => {
    return Array.from({ length: numRows }, () =>
        Array.from({ length: numCols }, () => Math.random() > 0.7)
    );
};

const GameOfLife: React.FC = () => {
    const [grid, setGrid] = useState(() => generateEmptyGrid());
    const [running, setRunning] = useState(false);
    const runningRef = useRef(running);
    runningRef.current = running;

    const runSimulation = useCallback(() => {
        if (!runningRef.current) return;

        setGrid((g) => {
            return g.map((row, i) =>
                row.map((cell, j) => {
                    let neighbors = 0;
                    for (let x = -1; x <= 1; x++) {
                        for (let y = -1; y <= 1; y++) {
                            if (x === 0 && y === 0) continue;
                            const newI = i + x;
                            const newJ = j + y;
                            if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
                                neighbors += g[newI][newJ] ? 1 : 0;
                            }
                        }
                    }

                    if (neighbors < 2 || neighbors > 3) return false;
                    else if (cell && (neighbors === 2 || neighbors === 3)) return true;
                    else if (!cell && neighbors === 3) return true;
                    return cell;
                })
            );
        });
    }, []);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (running) {
            intervalId = setInterval(runSimulation, 100);
        }
        return () => clearInterval(intervalId);
    }, [running, runSimulation]);

    const toggleRunning = () => {
        setRunning((prevRunning) => {
            if (!prevRunning && grid.every(row => row.every(cell => !cell))) {
                setGrid(generateRandomGrid());
            }
            return !prevRunning;
        });
    };

    return (
        <div className='container'>
            <h1>Jeu de la Vie</h1>
            <div className='controls'>
                <button
                    className={`btn ${running ? 'btnStop' : 'btnStart'}`}
                    onClick={toggleRunning}
                >
                    {running ? 'Stop' : 'Start'}
                </button>
                <button
                    className={'btn btnClear'}
                    onClick={() => {
                        setGrid(generateEmptyGrid());
                        setRunning(false);
                    }}
                >
                    Clear
                </button>
                {/* <button
                    className={'btn btnRandom'}
                    onClick={() => {
                        setGrid(generateRandomGrid());
                    }}
                >
                    Random
                </button> */}
            </div>
            <div className='gridContainer'>
                <div
                    className='grid'
                    style={{
                        gridTemplateColumns: `repeat(${numCols}, 20px)`,
                    }}
                >
                    {grid.map((row, i) =>
                        row.map((cell, j) => (
                            <div
                                key={`${i}-${j}`}
                                onClick={() => {
                                    if (!running) {
                                        const newGrid = [...grid];
                                        newGrid[i][j] = !cell;
                                        setGrid(newGrid);
                                    }
                                }}
                                className={`cell ${cell ? 'alive' : ''}`}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameOfLife;
