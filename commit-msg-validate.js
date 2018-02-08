const fs = require('fs');
const validateMessage = require('validate-commit-msg');

const [, ,filename] = process.argv;

if (!filename) return console.log(2);

const data = fs.readFileSync(filename, 'utf8');

if (!data) return console.log(3);

const valid = validateMessage(data, filename);

console.log(valid ? 0 : 1);
