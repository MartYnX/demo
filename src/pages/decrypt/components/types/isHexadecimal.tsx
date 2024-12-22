export const isHexadecimal = (msg: string): string | boolean => {
    const hexRegex = /^[0-9A-Fa-f]+$/;
    if (hexRegex.test(msg) && msg.length % 2 === 0) {
        try {
            const decoded = msg
                .match(/.{2}/g)!
                .map((byte) => String.fromCharCode(parseInt(byte, 16)))
                .join("");
            return decoded;  // Retourner le texte décodé
        } catch {
            return false;
        }
    }
    return false;
};
