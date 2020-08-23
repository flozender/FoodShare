const Food = require("../models/food");
const { getDistance } = require("geolib");

module.exports = {
  create: async (req, res) => {
    try {
      const food = await Food.create(req.body);
      food.save();
      return res.status(200).send({
        food,
        message: "food successfully created",
      });
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  readOne: async (req, res) => {
    if (!req.params.id) return res.status(400).send("Bad request");
    try {
      const food = await Food.find({ _id: req.params.id });

      if (!food) {
        return res.status(404).send("Food doesn't exist");
      } else {
        return res.status(200).send(food);
      }
    } catch (err) {
      if (err.kind === "ObjectId") {
        return res.status(404).send("Food not found");
      }
      return res.status(500).send("Error retrieving Food");
    }
  },

  readAll: async (req, res) => {
    try {
      // If the food item has expired, change availability to false.
      const count = await Food.countDocuments({});
      if (count > 0) {
        await Food.updateMany(
          { expiresOn: { $lt: Date.now() } },
          { available: false }
        );
      }

      const userLat = req.body.lat;
      const userLong = req.body.long;

      // Find only the available food items.
      let food = await Food.find({ available: true });

      food = food.filter((foodItem) => {
        const distance = getDistance(
          { latitude: userLat, longitude: userLong },
          { latitude: foodItem.lat, longitude: foodItem.long }
        );
        return distance / 1000 <= 20;
      });

      if (food) {
        return res.status(200).send(food);
      }
    } catch (err) {
      res.status(500).send("Some error occured while retrieving foods", err);
    }
  },

  update: async (req, res) => {
    if (!req.params.id) return res.status(400).send("Bad request");

    try {
      const food = await Food.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      );

      if (!food) return res.status(404).send("Food not found");
      return res.status(200).send(food);
    } catch (err) {
      if (err.kind === "ObjectId") {
        return res.status(404).send("Food not found");
      }
      res.status(500).send("Error updating food");
    }
  },

  delete: async (req, res) => {
    if (!req.params.id) return res.status(400).send("Bad request");

    try {
      const food = await Food.findOneAndRemove({ _id: req.params.id });
      if (!food) return res.status(404).send("Food not found");
      return res.status(200).send("Food deleted successfully");
    } catch (err) {
      if (err.kind === "ObjectId") {
        return res.status(404).send("Food not found");
      }
      res.status(500).send("Error deleting food");
    }
  },
};
