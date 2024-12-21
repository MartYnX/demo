export const isBase64 = (msg: string): string | boolean => {
    const base64Regex = /^[A-Za-z0-9+/]+={0,2}$/;

    // Vérifier si la chaîne correspond au format Base64
    if (base64Regex.test(msg) && msg.length % 4 === 0) {
        try {
            // Décoder le message
            const decoded = atob(msg);
            return decoded;  // Retourner le texte décodé
        } catch (e) {
            return false;  // Si l'opération échoue, retourner false
        }
    }

    return false;  // Si le format Base64 n'est pas respecté
};
