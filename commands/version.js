const fs = require("fs");
const { resolve } = require('path')

async function version() {


  const res = fs.readFileSync(resolve(process.cwd(), process.argv[1], '/package.json') );

  const data = JSON.parse(res);

  console.log(`DDD Generator is currently in the ${data.version} version.`);
  return data.version;
}

module.exports = version