const fs = require('fs');
const path = require('path');

const readDir = (filePath) => {
  const res = fs.readdirSync(filePath, { withFileTypes: true });
  const dirList = [];
  res.forEach((item) => {
    if (item.isDirectory()) {
      dirList.push({
        path: path.join(filePath, item.name),
        name: item.name,
      });
    }
  });
  return dirList;
};

const getEntryList = (filePath) => {
  const res = fs.readdirSync(filePath, { withFileTypes: true });
  const entry = {};
  res.forEach((item) => {
    if (item.isDirectory()) {
      entry[item.name] = path.join(filePath, item.name);
    }
  });
  return entry;
};

const getModeConfig = (isProd) => {
  return isProd
    ? {}
    : {
        watch: true,
        devtool: 'source-map',
      };
};
module.exports = {
  readDir,
  getEntryList,
  getModeConfig,
};
