const fsExtra = require("fs-extra");
const { resolve } = require('path') 

function genShared(path) {
  try {
    let actualDir = process.cwd() + "/";
    if (path) {
      actualDir += path;
    }
    
    fsExtra.copy(resolve(__dirname, 'shared'), actualDir);

    console.log("@shared structure generated!");
  } catch (err) {
  }
}

module.exports = genShared;
