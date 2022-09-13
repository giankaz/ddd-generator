#! /usr/bin/env node
const { program } = require('commander')
const generateDDD = require('./commands/ddd')

program
    .command('gen <folder-name>')
    .description('Generates a DDD structure folder')
    .action(generateDDD)

program.parse()

