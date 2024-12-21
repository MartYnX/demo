import React, { useState } from "react";
import { isBase64 } from "./types/isBase64";
import { isHexadecimal } from "./types/isHexadecimal";
import { isROT13 } from "./types/isROT13";
import { isHash } from "./types/isHash";
import { isMorse } from "./types/isMorse";
import { isAsciiDecimal } from "./types/isAsciiDecimal";

interface EncryptionTypeDetectorProps {
    message: string;
}

const EncryptionTypeDetector: React.FC<EncryptionTypeDetectorProps> = ({ message }) => {
    const detectEncryptionType = (msg: string): string => {
        // Base64
        const base64Decoded = isBase64(msg);
        if (base64Decoded) {
            return `Base64 (Texte décrypté : ${base64Decoded})`;
        }

        // Hexadecimal
        const hexDecoded = isHexadecimal(msg);
        if (hexDecoded) {
            return `Hexadecimal (Texte décrypté : ${hexDecoded})`;
        }

        // ROT13
        const rot13Decoded = isROT13(msg);
        if (rot13Decoded) {
            return `ROT13 (Texte décrypté : ${rot13Decoded})`;
        }

        // Hash
        const hashType = isHash(msg);
        if (hashType) {
            return `Hash détecté : ${hashType}`;
        }

        // Morse
        const morseDecoded = isMorse(msg);
        if (morseDecoded) {
            return `Code Morse (Texte décrypté : ${morseDecoded})`;
        }

        // ASCII Décimal
        const asciiDecoded = isAsciiDecimal(msg);
        if (asciiDecoded) {
            return `ASCII Décimal (Texte décrypté : ${asciiDecoded})`;
        }

        return "Type inconnu ou non détecté";
    };

    return (
        <p>
            <strong>Type détecté :</strong> {detectEncryptionType(message)}
        </p>
    );
};

export default EncryptionTypeDetector;