const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: String,
  allergens: Array,
  diet: Array,
  long: Number,
  lat: Number,
  description: String,
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  guest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  addedOn: {
    type: Date,
    default: Date.now,
  },
  expiresOn: {
    type: Date,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('food', foodSchema);
