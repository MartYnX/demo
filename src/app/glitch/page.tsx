'use client'

import React, { useEffect, useRef } from 'react';
import './glitch.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Glitch'
}

const Glitch: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const WIDTH = 700;
                const HEIGHT = 500;
                canvas.width = WIDTH;
                canvas.height = HEIGHT;
                ctx.fillStyle = 'white';
                ctx.fillRect(0, 0, WIDTH, HEIGHT);
                ctx.fill();
                const imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
                const pix = imgData.data;

                const flickering = () => {
                    for (let i = 0; i < pix.length; i += 4) {
                        const color = (Math.random() * 255) + 50;
                        pix[i] = color;
                        pix[i + 1] = color;
                        pix[i + 2] = color;
                    }
                    ctx.putImageData(imgData, 0, 0);
                };

                const flickerInterval = setInterval(flickering, 30);

                return () => clearInterval(flickerInterval);
            }
        }
    }, []);

    return (
        <div className="not-found">
            <h1>text</h1>
            <div className="frame">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="caps">
                <img src="http://ademilter.com/caps.png" alt="" />
            </div>
            <canvas ref={canvasRef} id="canvas"></canvas>
        </div>
    );
};

export default Glitch;
