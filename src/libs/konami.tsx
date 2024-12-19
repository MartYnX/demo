import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const KonamiCode = () => {
    const [keysPressed, setKeysPressed] = useState<number[]>([]);
    const [isCorrect, setIsCorrect] = useState(false);
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

    const handleKeyUp = (event: KeyboardEvent) => {
        setKeysPressed((prev) => {
            const newKeys = [...prev, event.keyCode];

            // Check if the current sequence is correct so far
            const isSequenceCorrect = newKeys.every((key, index) => key === correctCombination[index]);

            if (isSequenceCorrect) {
                if (newKeys.length === correctCombination.length) {
                    setIsCorrect(true);
                    console.log("Konami Code activated!");
                    router.push("https://portfoliojulienlegrand.vercel.app/");
                }
                return newKeys;
            } else {
                setIsCorrect(false);
                return [];
            }
        });
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
