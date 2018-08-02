const fs = require('fs');
const shell = require('shelljs');

const stage = (file) => shell.exec(`git add ${file}`).code;
// Get git's working tree status and returns list of new or modified files
const treeStatus = () => 
  shell.exec('git status --short')
