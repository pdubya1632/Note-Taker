
// import dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');

// create app and assign port
const app = express();
const PORT = 3001;

// middleware
app.use(express.json());
app.use(express.static('public'));

// GET request for api route

// POST request for api route

// DELETE request for api route

// GET request routes : wildcard fallback
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

// GET request routes for index and notes
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, './public/notes.html'))
);

// Port started message
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);