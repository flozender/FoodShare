const mongoose = require('mongoose');
const Joi = require('joi');

const notificationSchema = new mongoose.Schema({
  type: {
    type: Number,
    required: true,
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  description: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
  },
  actionURL: {
    type: String,
    required: true,
  },
});

const Notification = mongoose.model('Notification', notificationSchema);

function validateNotification(notification) {
  const schema = Joi.object({
    type: Joi.string().required(),
    to: Joi.objectId().required(),
    from: Joi.objectId().required(),
    description: Joi.string().min(5).max(100).required(),
    actionURL: Joi.string().required(),
  });
  return schema.validate(notification);
}

module.exports.notificationSchema = notificationSchema;
module.exports.Notification = Notification;
module.exports.validateNotification = validateNotification;
