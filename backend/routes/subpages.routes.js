const express = require('express');
const router = express.Router();

const Subpages = require(`../models/subpages.model`);

router.get(`/subpages`, async (req, res) => {
  try {
    const result = await Subpages
      .find();
    if (!result) res.status(404).json({ subpages: `Not found` });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get(`/subpages/:id`, async (req, res) => {
  try {
    const result = await Subpages
      .findByID(req.params.id);
    if (!result) res.status(404).json({ subpages: `Not found` });
    else res.json(result);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
