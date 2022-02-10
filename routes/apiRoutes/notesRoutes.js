const router = require('express').Router();
const fs = require('fs');

router.get('/notes', (req, res) => {
  let currentNotes = JSON.parse(fs.readFileSync('./db/db.json'));

  return res.json(currentNotes);
});

router.post('/notes', (req, res) => {
  console.log('Posting notes');
});

router.delete('/notes/:id', (req, res) => {
  console.log('Delete notes');
});

module.exports = router;
