const fsExtra = require("fs-extra");

function genShared(path) {
  try {
    let actualDir = process.cwd() + "/";
    if (path) {
      actualDir += path;
    }
    console.log(actualDir)

    fsExtra.copy("./shared", actualDir);

    console.log("@shared structure generated!");
  } catch (err) {
  }
}

module.exports = genShared;
