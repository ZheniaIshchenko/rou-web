import fs from 'fs';

export const lessBlocks = (path) => {
    fs.appendFile(path, `// main: ${app.path.src.less}`, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
    })
} 