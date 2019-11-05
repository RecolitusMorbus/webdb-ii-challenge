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

router.put('/:id', (req, res) => {
  const changes = req.body;

  Selection('cars')
    .where({ id: req.params.id })
    .update(changes)
    .then(repairs => {
      res.status(200).json(repairs);
    })
    .catch(err => {
      res.status(500).json({ err: "Yeah, we'll hold onto your vehicle until you get the money." });
    });
});

router.delete('/:id', (req, res) => {
  const changes = req.body;

  Selection('cars')
    .where({ id: req.params.id })
    .delete()
    .then(repairs => {
      res.status(200).json(repairs);
    })
    .catch(err => {
      res.status(500).json({ err: "Sir, that car is totaled. We can't take it." });
    });
});

module.exports = router;