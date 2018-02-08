const fs = require('fs');
const validateMessage = require('validate-commit-msg');

const [, ,filename] = process.argv;

if (!filename) return console.log(2);

const data = fs.readFileSync(filename, 'utf8');

if (!data) return console.log(3);

// allow override of rules for the occasional use
if (data.startsWith('!!')) {
    const newData = data.substring(2);
    fs.writeFileSync(filename, newData);
    return console.log(0);
}

const valid = validateMessage(data, filename);

console.log(valid ? 0 : 1);
