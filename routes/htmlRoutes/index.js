// Imports
const path = require('path');
const router = require('express').Router();

// Creates route for the notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Redirects all other routes to index.html
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
