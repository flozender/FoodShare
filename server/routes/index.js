const fs = require("fs");
const express = require("express");

const app = express();

fs.readdirSync(__dirname)
	.filter(
		(file) =>
			file.indexOf(".") !== 0 &&
			file.split(".")[1] === "js" &&
			file !== "index.js"
	)
	.forEach((file) => {
		const routeName = file.split(".")[0];
		app.use(`/${routeName}`, require(`./${file}`));
	});

module.exports = app;

