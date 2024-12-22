export const isROT13 = (msg: string): string | boolean => {
    // Autoriser les lettres, les espaces, les virgules et les points
    if (/^[A-Za-z\s,.]+$/.test(msg)) {
        const decoded = msg.replace(/[A-Za-z]/g, (char) => {
            const start = char <= "Z" ? 65 : 97;
            return String.fromCharCode(((char.charCodeAt(0) - start + 13) % 26) + start);
        });
        return decoded;  // Retourner le texte décrypté
    }
    return "Message ROT13 invalide. Seules les lettres alphabétiques, les virgules et les points sont autorisés.";
};