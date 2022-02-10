const path = require('path');
const router = require('express').Router();

// Route for /notes.html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// All other routes redirect to index.html
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
