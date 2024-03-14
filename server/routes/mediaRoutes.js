
const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');

router.post('/submitForm', mediaController.submitForm); 


router.get('/test', (req, res) => {
  res.send('Test route works!');
});

module.exports = router; 