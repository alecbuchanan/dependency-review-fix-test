const express = require('express');
const lodash = require('lodash');
const minimist = require('minimist');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const data = {
    message: 'Hello World!',
    timestamp: new Date().toISOString(),
    lodashVersion: lodash.VERSION
  };
  
  res.json(data);
});

app.listen(port, () => {
  console.log(`Test app listening at http://localhost:${port}`);
});

module.exports = app;
