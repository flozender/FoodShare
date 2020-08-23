const Joi = require("joi");

module.exports = {
  create: async (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().required().max(30),
      description: Joi.string().max(120),
      quantity: Joi.number(),
      expiresOn: Joi.date().required(),
      lat: Joi.number().required(),
      long: Joi.number().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(403).send({ error: error.details[0].message });
    next();
  },
};
