const fs = require("fs");

async function version() {
  const res = fs.readFileSync("package.json");

  const data = JSON.parse(res);

  console.log(`DDD Generator is currently in the ${data.version} version.`);
  return data.version;
}

module.exports = version