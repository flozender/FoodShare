const { log } = require('../startup/logger');

module.exports = (err, req, res, next) => {
  log.error(err, err.message);
  res.status(500).send(`There has been an error: ${err.message}`);
};
