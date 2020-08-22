require('express-async-errors');
const { log } = require('./logger');

module.exports = function () {
  process.on('uncaughtException', (exception) => {
    log.fatal(exception, exception.message);
    process.exit(1);
  });

  process.on('unhandledRejection', (exception) => {
    log.fatal(exception, exception.message);
    process.exit(1);
  });
};
