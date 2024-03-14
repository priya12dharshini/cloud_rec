const express = require('express');
const router = express.Router();
const finController = require('../controllers/finController');

router.post('/submitFinForm', finController.submitFinForm);

module.exports = router;