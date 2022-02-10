const router = require('express').Router();
const db = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const { createNote } = require('../../lib/notes');

router.get('/notes', (req, res) => {
  let results = db;
  res.json(results);
});

router.post('/notes', (req, res) => {
  req.body.id = uuidv4();

  const note = createNote(req.body, db);

  res.json(note);
});

// router.delete('/notes/:id', (req, res) => {
//   console.log('Delete notes');
// });

module.exports = router;
