const mongoose = require('mongoose');

const subpagesSchema = new mongoose.Schema({
  name: { type: String, required: true},
  image: { type: String, required: true},
});

module.exports = mongoose.model('Subpages', subpagesSchema);
