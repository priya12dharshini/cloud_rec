const Hcare = require('../server/form/hcare')


const express = require('express');
const router = express.Router();

// Define a route for submitting Healthcare form answers
router.post('/api/healthcare-answers', async (req, res) => {
  try {
    const {
      question1,
      r1,
      r2,
      r3,
      r4,
      r5,
      question7,
      r6,
      r7,
      r8,
    } = req.body;

    // Create a new instance of the Hcare model with the submitted data
    const healthcareData = new Hcare({
      question1,
      r1,
      r2,
      r3,
      r4,
      r5,
      question7,
      r6,
      r7,
      r8,
    });

    await healthcareData.save();

    res.status(201).json({ message: 'Healthcare form answers saved successfully' });
  } catch (error) {
    console.error('Error submitting Healthcare form', error);
    res.status(500).json({ error: 'Error submitting Healthcare form' });
  }
});

module.exports = router;
