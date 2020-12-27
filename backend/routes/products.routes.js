const express = require('express');
const router = express.Router();

const Products = require(`../models/products.model`);

router.get(`/products`, async (req, res) => {
  try {
    const result = await Products
      .find();
    if (!result) res.status(404).json({ products: `Not found` });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get(`/products/:id`, async (req, res) => {
  try {
    const result = await Products
      .findByID(req.params.id);
    if (!result) res.status(404).json({ products: `Not found` });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
