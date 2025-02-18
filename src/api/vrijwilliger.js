const express = require('express');
const router = express.Router();

let vrijwilligers = [
  { id: 1, voornaam: "Rachid", achternaam: "Azrou", telefoon: "0612345678" },
  { id: 2, voornaam: "Ahmed", achternaam: "El Amrani", telefoon: "0687654321" }
];

// Haal alle vrijwilligers op
router.get('/', (req, res) => {
  res.json(vrijwilligers);
});

// Voeg een nieuwe vrijwilliger toe
router.post('/', (req, res) => {
  const nieuweVrijwilliger = req.body;
  nieuweVrijwilliger.id = vrijwilligers.length + 1;
  vrijwilligers.push(nieuweVrijwilliger);
  res.json(nieuweVrijwilliger);
});

module.exports = router;