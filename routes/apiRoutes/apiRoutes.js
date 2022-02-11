// Imports
const router = require('express').Router();
const { createNote, deleteNote } = require('../../lib/notes');
const fs = require('fs');

// Simple GET route to display all notes in the db
router.get('/notes', (req, res) => {
  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

  return res.json(notes);
});

// POST request that calls a function to create a new note
router.post('/notes', (req, res) => {
  let updatedNotes = createNote(req.body);

  return res.json(updatedNotes);
});

// DELETE request that calls a function to delete a note by ID
router.delete('/notes/:id', (req, res) => {
  let finished = deleteNote(req.params.id);

  return res.json(finished);
});

module.exports = router;
