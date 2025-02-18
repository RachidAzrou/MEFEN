const express = require('express');
const router = express.Router();

let notificaties = [];

// Haal alle notificaties op
router.get('/', (req, res) => {
  res.json(notificaties);
});

// Voeg een nieuwe notificatie toe
router.post('/', (req, res) => {
  const nieuweNotificatie = req.body;
  notificaties.push(nieuweNotificatie);
  res.json(nieuweNotificatie);
});

module.exports = router;