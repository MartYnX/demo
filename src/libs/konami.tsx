'use client'

import { useEffect, useCallback, useRef } from 'react';

const KonamiCode = () => {

    const keysPressedRef = useRef<string[]>([]); // useRef to persist the keysPressed array

    const handleKeyUp = useCallback((event: KeyboardEvent) => {
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

        // Access the keysPressed array via useRef
        keysPressedRef.current.push(event.key);

        // Check if the current sequence is correct so far
        const isSequenceCorrect = keysPressedRef.current.every((key, index) => key === correctCombination[index]);

        if (isSequenceCorrect) {
            if (keysPressedRef.current.length === correctCombination.length) {
                console.log("Konami Code activated!");
                window.open("https://portfoliojulienlegrand.vercel.app/", "_blank");
                keysPressedRef.current = []; // Reset the keysPressed array after success
            }
        } else {
            keysPressedRef.current = []; // Reset the keysPressed array if incorrect
        }
    }, []);  // No need to add correctCombination here anymore

    useEffect(() => {
        const keyUpListener = (event: KeyboardEvent) => handleKeyUp(event);
        window.addEventListener('keyup', keyUpListener);

        return () => {
            window.removeEventListener('keyup', keyUpListener);
        };
    }, [handleKeyUp]);

    return null;
};

export default KonamiCode;
