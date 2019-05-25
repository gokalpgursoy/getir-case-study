require('colors');

const config = require('../config');

const noop = () => { };
const consoleLog = config.logging ? console.log.bind(console) : noop; //eslint-disable-line

const logger = {
  log(...argss) {
    const tag = '[ ✨ LOG ✨ ]'.green;
    const args = argss.map((arg) => {
      if (typeof arg === 'object') {
        const string = JSON.stringify(arg, null, 2);
        return `${tag}  ${string.cyan}`;
      }
      return `${tag}  ${arg.cyan}`;
    });
    consoleLog.apply(console, args);
  },
  error(...argss) {
    const args = argss.map((arg) => {
      const argNew = arg.stack || arg;
      const name = argNew.name || '[ ❌ ERROR ❌ ]';
      const log = `${name.yellow}  ${arg.red}`;
      return log;
    });
    consoleLog.apply(console, args);
  },
};

module.exports = logger;
