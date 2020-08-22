const express = require('express');
const _ = require('lodash');
const router = express.Router();

const { User } = require('../models/user');
const {
  Notification,
  validateNotification,
} = require('../models/notification');
const validate = require('../middleware/validate');

router.post('/', validate(validateNotification), async (req, res) => {
  const notification = new Notification(
    _.pick(req.body, ['type', 'to', 'from', 'description', 'actionURL'])
  );

  const user = await User.findById(req.body.to);
  user.notifications.push(notification);
  await user.save();
  res.send(notification);
});

module.exports = router;
