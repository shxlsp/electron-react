const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '../src');
console.log(src);

const res = fs.readdirSync(src, { withFileTypes: true });
// res: Dirent[]

res.forEach((item) => {
  if (item.isDirectory()) {
    console.log(item.name);
  }
});
const pubPath = process.cwd();
console.log(pubPath);
console.log(__filename);
console.log(__dirname);

const { readDir, getEntryList } = require('../webpack/utils');
// console.log(readDir(src));
console.log(getEntryList(src));
