const Joi = require('joi');

module.exports = {
  create: async (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().required().max(30),
      description: Joi.string().required().max(120),
      quantity: Joi.number().required(),
      expiresOn: Joi.date().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) return res.status(403).send({ error: error.details[0].message });
    next();
  },
};
