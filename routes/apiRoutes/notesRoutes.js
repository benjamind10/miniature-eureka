const router = require('express').Router();
const db = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const { createNote, deleteNote } = require('../../lib/notes');
const fs = require('fs');

router.get('/notes', (req, res) => {
  let results = db;
  res.json(results);
});

router.post('/notes', (req, res) => {
  res.json(createNote(req.body, db));
});

router.delete('/notes/:id', (req, res) => {
  const deletedNote = deleteNote(req.params.id);

  res.json(deletedNote);
});

module.exports = router;
