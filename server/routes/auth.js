const express = require('express');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const _ = require('lodash');
const router = express.Router();

const { User } = require('../models/user');
const validate = require('../middleware/validate');

// Authenticates a user.
router.post('/', validate(validateAuth), async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid email or password...');

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send('Invalid email or password...');

  const token = user.generateAuthToken();
  const responseData = _.pick(user, ['name', 'email']);
  responseData.token = token;
  res.send(responseData);
});

function validateAuth(req) {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required(),
    password: Joi.string().min(8).max(255).required(),
  });
  return schema.validate(req);
}

module.exports = router;
