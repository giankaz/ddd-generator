#! /usr/bin/env node
const { program } = require("commander");
const generateDDD = require("./ddd");
const genShared = require("./genShared");
const version = require("./version");

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
