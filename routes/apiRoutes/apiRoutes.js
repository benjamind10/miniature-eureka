const router = require('express').Router();
const { createNote, deleteNote } = require('../../lib/notes');
const fs = require('fs');

router.get('/notes', (req, res) => {
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

  return res.json(notes);
});

router.post('/notes', (req, res) => {
  let updatedNotes = createNote(req.body);

  return res.json(updatedNotes);
});

router.delete('/notes/:id', (req, res) => {
  let finished = deleteNote(req.params.id);

  return res.json(finished);
});

module.exports = router;
