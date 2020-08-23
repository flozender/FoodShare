const express = require('express');
const _ = require('lodash');
const router = express.Router();

const { User } = require('../models/user');
const {
  Notification,
  validateNotification,
} = require('../models/notification');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');

// Adds a new notification.
router.post('/', validate(validateNotification), async (req, res) => {
  const notification = new Notification(
    _.pick(req.body, ['type', 'to', 'from', 'description', 'actionURL'])
  );

  const user = await User.findById(req.body.to);
  if (!user)
    return res.status(400).send('No user found with the given userId.');

  user.notifications.push(notification);
  await user.save();

  res.send(notification);
});

// Changes the notification status from unread to read.
router.put('/:notificationId', auth, async (req, res) => {
  const user = await User.findById(req.body.userId);
  if (!user)
    return res.status(400).send('No user found with the given userId.');

  const notificationId = req.params.notificationId;

  if (user.notifications.id(notificationId) !== null) {
    user.notifications.id(notificationId).read = true;
    await user.save();
  } else {
    return res
      .status(400)
      .send('No notification found with the given notificationId');
  }

  res.send(user.notifications.id(notificationId));
});

module.exports = router;
