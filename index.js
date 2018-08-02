const fs = require('fs');
const shell = require('shelljs');

const stage = (file) => shell.exec(`git add ${file}`).code;
