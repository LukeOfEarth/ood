const fs = require('fs');
const path = require('path');

const readJSONFile = (path) => {
    const file = JSON.parse(fs.readFileSync(path, 'utf8'));
    return file;
}

const readAllJSONFilesInDir = (dir) => {
    const files = fs.readdirSync(dir).filter(f => path.extname(f) === '.json');
    return files.map((file) => {
        const fileData = fs.readFileSync(path.join(dir, file));
        return JSON.parse(fileData);
    }); 
}

module.exports = {
    readJSONFile,
    readAllJSONFilesInDir
}