const fs = require('fs');
const shell = require('shelljs');

const stage = (file) => shell.exec(`git add ${file}`).code;
// Get git's working tree status and returns list of new or modified files
const treeStatus = () => 
  shell.exec('git status --short')
  .stdout
  .trim()
  .split('\n')
  .map((e) => e.match(/AM?\s+([^\s]+)/).pop());
const commit = (message) => shell.exec(`git commit -m "${message}"`).code;
const push = () => shell.exec('git push').code;

const read = (file) => fs.readFileSync(file, 'utf8');
