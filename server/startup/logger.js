const pino = require('pino');
const log = pino({ prettyPrint: { colorize: true } });

module.exports.log = log;
