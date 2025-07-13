const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  address: String,
  phone: String,
  website: String,
  description: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // who added it
}, { timestamps: true });

module.exports = mongoose.model('Business', businessSchema);
