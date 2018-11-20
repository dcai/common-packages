/* eslint-disable */
const chalk = require('chalk');
const logLevels = { SEVERE: 5, WARN: 4, INFO: 3, DEBUG: 2, SILLY: 1 };
const LOGPREPEND = '> ';

const logMessage = (msg, level = 5) => {
  if (level >= logLevel) {
    switch (level) {
      case logLevels.SEVERE:
        console.error(`${LOGPREPEND}${chalk.red(msg)}`);
        break;
      case logLevels.WARN:
      case logLevels.DEBUG:
      case logLevels.SILLY:
        console.warn(`${LOGPREPEND}${chalk.red(msg)}`);
        break;
      case logLevels.INFO:
      default:
        console.info(`${LOGPREPEND}${chalk.green(msg)}`);
        break;
    }
  }
};
const logObject = (obj, level = 1) => {
  if (level >= logLevel) {
    console.dir(obj);
  }
};
const setLogLevel = logLv => {
  if (typeof logLv === 'string') {
    switch (logLv.toLowerCase()) {
      case 'error':
      case 'severe':
        logLevel = logLevels.SEVERE;
        break;
      case 'warn':
        logLevel = logLevels.WARN;
        break;
      case 'info':
        logLevel = logLevels.INFO;
        break;
      case 'debug':
        logLevel = logLevels.DEBUG;
        break;
      case 'verbose':
      case 'silly':
      default:
        logLevel = logLevels.SILLY;
        break;
    }
  } else {
    logLevel = logLv;
  }
  log.info(JSON.stringify);
  log.info(`set log level to ${logLevel}`);
};
const log = {
  severe: msg => logMessage(msg, logLevels.SEVERE),
  warn: msg => logMessage(msg, logLevels.WARN),
  info: msg => logMessage(msg, logLevels.INFO),
  debug: msg => logMessage(msg, logLevels.DEBUG),
  silly: msg => logMessage(msg, logLevels.SILLY),
  dir: obj => logObject(obj, logLevels.SILLY),
};

let logLevel = logLevels.SILLY;

module.exports = { log, logLevels, setLogLevel };
