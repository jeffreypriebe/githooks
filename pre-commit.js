const fs = require("fs");

const [, , ...filesChanged] = process.argv;

if (!filesChanged || filesChanged.length === 0) return console.log(0);

// If any match, check this file
const checkFilesIf = [/.(j|t)sx?$/i];

const filesToCheck = filesChanged.filter(filepath =>
  checkFilesIf.reduce((p, v) => p || v.test(filepath), false)
);

const preCommitChecks = require("./pre-commit-checks");

const invalidText = [];

//check each file
const fileResults = filesToCheck.map((filename, idx) => {
  const data = fs.readFileSync(filename, "utf8");

  if (!data) return 0;

  let isInValid = false;

  !preCommitChecks.forEach(({ regex, message }) => {
    const result = regex.exec(data);
    if (result !== null) invalidText.push({ match: result[0], message });
    isInValid = isInValid || result !== null;
  }, true);

  if (isInValid) {
    console.warn(`Found invalid text in file "${filename}":`);
    invalidText.forEach(({ match, message }, idx) => {
      console.warn(`${idx + 1}: ${match} : ${message}`);
    });
    return 1;
  }
}, 0);

// return highest resulting value
const max = fileResults.reduce((p, v) => (v > p ? v : p), 0);

console.log(max);
