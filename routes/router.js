const express = require('express');
const Selection = require('../data/dbConfig.js');

const router = express.Router();

router.get('/', (req, res) => {
  Selection
    .select('*')
    .from('cars')
    .then(inventory => {
      res.status(200).json(inventory);
    })
    .catch(err => {
      res.status(500).json({ err: "I'm sorry, this dealership can't...rather, won't accommodate your 'budget.'" });
    });
});

router.get('/:id', (req, res) => {
  Selection
    .select('*')
    .from('cars')
    .where('id', '=', req.params.id)
    .then(thisBabyHere => {
      res.status(200).json(thisBabyHere);
    })
    .catch(err => {
      res.status(500).json({ err: "I see your tastes are...undeveloped." });
    });
});

router.post('/', (req, res) => {
  Selection
    .insert(req.body, 'id')
    .into('cars')
    .then(tradeIn => {
      res.status(201).json(tradeIn);
    })
    .catch(err => {
      res.status(500).json({ err: "Hah, not on your life, chump." });
    });
});

module.exports = router;