const router = require('express').Router();
const db = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const { createNote, deleteNote } = require('../../lib/notes');
const fs = require('fs');

router.get('/notes', (req, res) => {
  let results = db;
  return res.json(results);
});

router.post('/notes', (req, res) => {
  let newNote = createNote(req.body, db);
  return res.json(newNote);
});

router.delete('/notes/:id', (req, res) => {
  const deletedNote = deleteNote(req.params.id);

  return res.json(deletedNote);
});

module.exports = router;
