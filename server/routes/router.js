const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const router = express.Router();

dotenv.config();
const apiKey = process.env.API_KEY;

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/asteroids/:from/:to/:apiKey', async (req, res) => {
  console.log(apiKey);
  console.log(req.params);
  const response = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${apiKey}`
  );
  const data = await response.json();
  res.send(data);
});

module.exports = router;
