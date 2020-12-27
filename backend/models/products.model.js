const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  name: { type: String, required: true},
  information: { type: String, required: true},
  price: { type: Number, required: true},
  numbers: { type: Number },
  inCart: { type: String},
  category: { type: String, required: true},
  image: { type: String, required: true},
  sex: { type: String},
});

module.exports = mongoose.model('Products', productsSchema);
