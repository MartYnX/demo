export const isHash = (msg: string): string | null => {
    if (/^[a-f0-9]{32}$/i.test(msg)) return "MD5 Hash";
    if (/^[a-f0-9]{40}$/i.test(msg)) return "SHA-1 Hash";
    if (/^[a-f0-9]{64}$/i.test(msg)) return "SHA-256 Hash";
    return null;
};
