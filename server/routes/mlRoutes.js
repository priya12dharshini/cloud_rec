const express = require('express');
const router = express.Router();
const mlController = require('../controllers/mlController');

router.post('/submitMlForm', mlController.submitMlForm);

module.exports = router;
