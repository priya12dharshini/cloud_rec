const express = require('express');
const router = express.Router();
const ecomController = require('../controllers/ecomController');

router.post('/submitEcomForm', ecomController.submitEcomForm);

module.exports = router;
