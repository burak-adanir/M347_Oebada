const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cryptoRoutes = require('./routes/index');

const app = express();

// Use CORS to allow cross-origin requests
app.use(cors());

// Use bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// Use routes defined in index.js
app.use('/api', cryptoRoutes);

module.exports = app;
