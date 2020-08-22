const express = require('express');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const router = express.Router();

const { User, validateUser } = require('../models/user');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');

router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

router.post('/', validate(validateUser), async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user)
    return res.status(400).send('A user with this email already exists.');

  user = new User(
    _.pick(req.body, ['name', 'email', 'password', 'phone', 'ssn'])
  );
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  await user.save();
  const token = user.generateAuthToken();
  const responseData = _.pick(user, ['_id', 'name', 'email', 'phone']);
  responseData.token = token;
  res.send(responseData);
});

module.exports = router;
