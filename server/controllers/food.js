const Food = require("../models/food")

module.exports = {
  create: async (request, response) => {
    try {
      const food = await Food.create(req.body)
      food.save()
      return res.status(200).json({
        data : {food},
        message: "food successfully created"
      })
    } catch (error) {
      return res.status(500).json({
        message:"server error"
      })
    }
  }
}