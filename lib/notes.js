const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const db = require('../db/db.json');

function createNote(body, notesArray) {
  const note = body;
  note.id = uuidv4();

  notesArray.push(note);
  console.log(notesArray);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray)
  );
}

function deleteNote(id) {
  let deleted = id;
  let currentNotes = JSON.parse(
    fs.readFileSync('./db/db.json', 'utf8')
  );

  let filtered = currentNotes.filter(note => note.id !== deleted);
  fs.writeFileSync('./db/db.json', JSON.stringify(filtered));

  return filtered;
}

module.exports = { createNote, deleteNote };
