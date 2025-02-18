const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const path = require('path');

// Serveer statische bestanden vanuit de 'public' map
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

// Mock data
let vrijwilligers = [
  { id: 1, voornaam: "Rachid", achternaam: "Azrou", telefoon: "0612345678" },
  { id: 2, voornaam: "Ahmed", achternaam: "El Amrani", telefoon: "0687654321" }
];

let materiaal = [
  { id: 1, naam: "Stoel", uitgeleendAan: 1 },
  { id: 2, naam: "Tafel", uitgeleendAan: 2 }
];

let notificaties = [];

// API-endpoints

// Haal alle vrijwilligers op
app.get('/api/vrijwilligers', (req, res) => {
  res.json(vrijwilligers);
});

// Voeg een nieuwe vrijwilliger toe
app.post('/api/vrijwilligers', (req, res) => {
  const nieuweVrijwilliger = req.body;
  nieuweVrijwilliger.id = vrijwilligers.length + 1;
  vrijwilligers.push(nieuweVrijwilliger);
  res.json(nieuweVrijwilliger);
});

// Haal alle materiaal op
app.get('/api/materiaal', (req, res) => {
  res.json(materiaal);
});

// Voeg nieuw materiaal toe
app.post('/api/materiaal', (req, res) => {
  const nieuwMateriaal = req.body;
  nieuwMateriaal.id = materiaal.length + 1;
  materiaal.push(nieuwMateriaal);
  res.json(nieuwMateriaal);
});

// Haal alle notificaties op
app.get('/api/notificaties', (req, res) => {
  res.json(notificaties);
});

// Voeg een nieuwe notificatie toe
app.post('/api/notificaties', (req, res) => {
  const nieuweNotificatie = req.body;
  notificaties.push(nieuweNotificatie);
  res.json(nieuweNotificatie);
});

// Start de server
app.listen(port, () => {
  console.log(`Server is running op http://localhost:${port}`);
});