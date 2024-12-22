export const isAsciiDecimal = (msg: string): string | null => {
    const asciiDecimalRegex = /^(\d{1,3}(\s|$))+$/; // Une ou plusieurs séries de nombres entre 0 et 255
    if (asciiDecimalRegex.test(msg)) {
        try {
            const decoded = msg
                .split(" ")
                .map((num) => String.fromCharCode(parseInt(num, 10)))
                .join("");
            return decoded;  // Retourner le texte décodé
        } catch {
            return null;
        }
    }
    return null;
};
