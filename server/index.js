const express = require("express");
var cors = require("cors");
const app = express();
const { log } = require("./startup/logger");

app.use(cors());

require("./startup/errorHandler")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();
require("./startup/prod")(app);

// app.use("/", require("./routes"));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  log.info(`Listening on port ${port}`);
});

module.exports = server;
