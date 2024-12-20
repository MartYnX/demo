import { useEffect } from 'react';

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
            // window.location.href = "https://portfoliojulienlegrand.vercel.app/";
            keysPressed = []; // Reset keysPressed after success
        }
    } else {
        keysPressed = []; // Reset keysPressed if incorrect
    }
};

const KonamiCode = () => {
    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []); // Empty dependency array, no need to add handleKeyUp

    return null;
};

export default KonamiCode;
