'use strict';
const functions = require('./functions.js')
const chalk = require('chalk');

let counter = 0;
const intervalId = setInterval(() => {
  const option = functions.getRandomOption();
  console.log(chalk.red(option));
  counter++;
  if (counter === 10) {
    clearInterval(intervalId);
  }
}, 5000);

console.log(chalk.yellow(functions.options));