#! /usr/bin/env node
const { program } = require("commander");
const generateDDD = require("./commands/ddd");
const genShared = require("./commands/genShared");
const version = require("./commands/version");

program
  .command("gen <folder-name>")
  .description("Generates a DDD structure folder")
  .action(generateDDD);

program
  .command("shared [path]")
  .description("Generates a @shared structure folder and its files")
  .action(genShared);

program
  .option("--version")
  .description("Generator version")
  .action(version);

program.parse();
