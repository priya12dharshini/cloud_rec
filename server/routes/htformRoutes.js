const express = require('express');
const router = express.Router();
const htformController = require('../controllers/htformController');

router.post('/submitHealthForm', htformController.submitHealthForm);

module.exports = router;