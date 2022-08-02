// const chalk = require('chalk'); // через require уже не работает
import chalk from 'chalk'; // ES6, не забудьте поставить "type": "module" в package.json
console.log(chalk.blue('Hello world!'));
console.log(chalk.bgGreen('Hello world!'));