'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const KonamiCode = () => {
    const router = useRouter();
    const correctCombination = [
        38, // Up
        38, // Up
        40, // Down
        40, // Down
        37, // Left
        39, // Right
        37, // Left
        39, // Right
        66, // B
        65, // A
    ];

    let keysPressed: number[] = [];

    const handleKeyUp = (event: KeyboardEvent) => {
        keysPressed.push(event.keyCode);

        // Check if the current sequence is correct so far
        const isSequenceCorrect = keysPressed.every((key, index) => key === correctCombination[index]);

        if (isSequenceCorrect) {
            if (keysPressed.length === correctCombination.length) {
                console.log("Konami Code activated!");
                router.push("https://portfoliojulienlegrand.vercel.app/"); // Redirect to the specified URL
                keysPressed = []; // Reset keysPressed after success
            }
        } else {
            keysPressed = []; // Reset keysPressed if incorrect
        }
    };

    useEffect(() => {
        const keyUpListener = (event: KeyboardEvent) => handleKeyUp(event);
        window.addEventListener('keyup', keyUpListener);

        return () => {
            window.removeEventListener('keyup', keyUpListener);
        };
    }, []);

    return null;
};

export default KonamiCode;
