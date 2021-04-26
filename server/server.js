const sampleData = require('../sample_data/api_techician_response_data.json');
const path = require('path');
const express = require('express');
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/api/v1/solar_farms/:solar_farm_id/technicians', (req, res) => {
  if (sampleData[req.params.solar_farm_id]) {
    res.status(200).send(sampleData[req.params.solar_farm_id]);
  } else {
    res.status(400).send('Solar Field ID not found');
  }
});

app.listen(port);
console.log(`listening on http://localhost/${port}/ `);
