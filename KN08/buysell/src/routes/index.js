const express = require('express');
const router = express.Router();

// Import the controller functions
const { buyCrypto, sellCrypto } = require('../controllers/cryptoController');

// Define routes for buying and selling crypto
router.post('/buy', buyCrypto);
router.post('/sell', sellCrypto);

module.exports = router;
