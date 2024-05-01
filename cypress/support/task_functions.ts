const fs = require('fs');

export function readFile(filename: string) {
    try {
        if (fs.existsSync(filename)) {
            return 'exists file!';
        }
    } catch (err) {
        throw new Error(err);
    }

    return null;
}

export function deleteFile(filePath: string) {
    if (fs.existsSync(filePath)) {
        fs.rmdirSync(filePath, { recursive: true, force: true });
    }

    return null;
}

export function createFile(filePath: string) {
    if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
    }

    return null;
}
