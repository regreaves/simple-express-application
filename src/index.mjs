'use strict';

const express = require('express');
const app = express();

const port = 8080;

app.get('/', (request, response) => {
  response.status(200).end();
});

app.get('/api', (request, response) => {
  response.status(200).json({ key: 'value' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
