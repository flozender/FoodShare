const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('config');
const jwt = require('jsonwebtoken');

const { notificationSchema } = require('./notification.js');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 1024,
    },
    phone: {
      type: String,
      validate: {
        validator: (v) => {
          return /\d{10}/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
      required: [true, 'User phone number required'],
    },
    ssn: {
      type: String,
      validate: {
        validator: (v) => {
          return /\d{9}/.test(v);
        },
        message: (props) => `${props.value} is not a valid ssn number!`,
      },
      required: [true, 'SSN number is required'],
    },
    foodshared: {
      type: Number,
      default: 0,
    },
    joindate: {
      type: Date,
      default: Date.now,
    },
    notifications: [
      {
        type: notificationSchema,
      },
    ],
    guest: {
      type: Boolean,
      default: false,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
      },
      coordinates: {
        type: [Number],
      },
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
    },
    config.get('jwtPrivateKey')
  );
  return token;
};

const User = mongoose.model('User', userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required(),
    password: Joi.string().min(8).max(255).required(),
    phone: Joi.string()
      .trim()
      .regex(/\d{10}/)
      .required()
      .messages({
        'string.pattern.base': 'Phone number must be a 10 digit number',
      }),
    ssn: Joi.string()
      .trim()
      .regex(/\d{9}/)
      .required()
      .messages({
        'string.pattern.base': 'SSN number must be a 9 digit number',
      }),
  });
  return schema.validate(user);
}

module.exports.User = User;
module.exports.validateUser = validateUser;
