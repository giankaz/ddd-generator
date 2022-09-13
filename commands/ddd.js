const fs = require("fs");

function generateDDD(name) {
  try {
    let actualDir = process.cwd() + "/";
    const splittedName = name.split("/");

    if (!!splittedName.length) {
      for (let i = 0; i < splittedName.length; i++) {
        if (!fs.existsSync(actualDir + splittedName[i])) {
          fs.mkdirSync(actualDir + splittedName[i]);
        }
        actualDir += splittedName[i] + "/";
      }
    }

    fs.mkdirSync(actualDir + "application/");
    fs.mkdirSync(actualDir + "application/dto");
    fs.mkdirSync(actualDir + "application/use-cases");

    fs.mkdirSync(actualDir + "domain/");
    fs.mkdirSync(actualDir + "domain/entities");
    fs.mkdirSync(actualDir + "domain/factory");
    fs.mkdirSync(actualDir + "domain/repository");
    fs.mkdirSync(actualDir + "domain/validators");
    fs.mkdirSync(actualDir + "domain/value-objects");
    console.log("DDD structure generated!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = generateDDD;
