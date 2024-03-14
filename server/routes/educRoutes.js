const express = require('express');
const router = express.Router();
const educController = require('../controllers/educController');

router.post('/submitEduForm', educController.submitEduForm);

module.exports = router;
