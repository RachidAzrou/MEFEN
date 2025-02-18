const express = require('express');
const router = express.Router();

let materiaal = [
  { id: 1, naam: "Stoel", uitgeleendAan: 1 },
  { id: 2, naam: "Tafel", uitgeleendAan: 2 }
];

// Haal alle materiaal op
router.get('/', (req, res) => {
  res.json(materiaal);
});

// Voeg nieuw materiaal toe
router.post('/', (req, res) => {
  const nieuwMateriaal = req.body;
  nieuwMateriaal.id = materiaal.length + 1;
  materiaal.push(nieuwMateriaal);
  res.json(nieuwMateriaal);
});

module.exports = router;