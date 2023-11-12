// YourHelperFunctions.ts
export const extractFileId = (link: string): string | null => {
    // Implement logic to extract the file ID from the Google Drive link
    // Example regex: /\/d\/([a-zA-Z0-9_-]+)/
    const match = link.match(/\/d\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
};
