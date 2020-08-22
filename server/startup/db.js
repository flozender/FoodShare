const mongoose = require('mongoose');
const config = require('config');

const { log } = require('./logger');

module.exports = function () {
  const db = config.get('db');
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => {
      log.info(`Connected to ${db}...`);
    });
};
