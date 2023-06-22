const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const router = express.Router();

dotenv.config();
const apiKey = process.env.API_KEY;

// middleware that is specific to this router
router.use((req, res, next) => {
  next();
});
// define the home page route
router.get('/asteroids/:from/:to/', async (req, res) => {
  const { from, to } = req.params;
  const response = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${from}&end_date=${to}&api_key=${apiKey}`);
  const data = await response.json();
  res.send(data);
});

module.exports = router;
