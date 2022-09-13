const fs = require("fs");
const { resolve } = require('path')

async function version() {

  const res = fs.readFileSync(resolve(__dirname, 'package.json') );

  const data = JSON.parse(res);

  console.log(`DDD Generator is currently in the ${data.version} version.`);
  return data.version;
}

module.exports = version