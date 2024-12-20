'use client'

import { useEffect } from 'react';;

const KonamiCode = () => {
    const correctCombination = [
        "ArrowUp",    // Up
        "ArrowUp",    // Up
        "ArrowDown",  // Down
        "ArrowDown",  // Down
        "ArrowLeft",  // Left
        "ArrowRight", // Right
        "ArrowLeft",  // Left
        "ArrowRight", // Right
        "b",           // B
        "a",           // A
    ];

    let keysPressed: string[] = [];

    const handleKeyUp = (event: KeyboardEvent) => {
        keysPressed.push(event.key);

        // Check if the current sequence is correct so far
        const isSequenceCorrect = keysPressed.every((key, index) => key === correctCombination[index]);

        if (isSequenceCorrect) {
            if (keysPressed.length === correctCombination.length) {
                console.log("Konami Code activated!");
                // router.push("https://portfoliojulienlegrand.vercel.app/");
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
