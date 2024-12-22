export const isBase64 = (msg: string): string | boolean => {
    const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;

    if (base64Regex.test(msg) && msg.length % 4 === 0) {
        try {
            const decoded = atob(msg);
            return decoded;  // Retourner le texte décodé
        } catch {
            return "Erreur lors du décodage Base64.";
        }
    }
    return "Format Base64 non valide.";
};