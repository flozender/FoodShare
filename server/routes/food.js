const express = require("express");
const router = express.Router();

const foodMiddleware = require("../middleware/food");
const foodController = require("../controllers/food");

router.post("/", foodMiddleware.create, foodController.create);

router.get("/:id", foodController.readOne);

router.get("/", foodController.readAll)

router.put("/:id", foodController.update)

router.delete("/:id", foodController.delete)

module.exports = router;
