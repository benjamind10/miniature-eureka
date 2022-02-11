const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

function createNote(body) {
  let addedNote = body;
  addedNote.id = uuidv4();

  let currentNotes = JSON.parse(
    fs.readFileSync('./db/db.json', 'utf8')
  );

  currentNotes.push(addedNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(currentNotes));

  return currentNotes;
}

function deleteNote(id) {
  let deletedNote = id;

  let currentNotes = JSON.parse(
    fs.readFileSync('./db/db.json', 'utf8')
  );
  let filtered = currentNotes.filter(file => file.id !== deletedNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(filtered));

  return filtered;
}

module.exports = { createNote, deleteNote };
