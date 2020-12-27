const mongoose = require('mongoose');

const cartsSchema = new mongoose.Schema({
  cartNumber: { type: Number, required: true},
  cartCost: { type: Number, required: true},
});

module.exports = mongoose.model('Cart', cartsSchema);
