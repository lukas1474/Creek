const express = require('express');
const router = express.Router();

const Cart = require(`../models/carts.model`);

router.get(`/carts`, async (req, res) => {
  try {
    const result = await Cart
      .find();
    if (!result) res.status(404).json({ cart: `Not found` });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get(`/carts/:id`, async (req, res) => {
  try {
    const result = await Cart
      .findByID(req.params.id);
    if (!result) res.status(404).json({ cart: `Not found` });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
