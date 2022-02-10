const res = require('express/lib/response');
const fs = require('fs');
const path = require('path');

function createNote(body, notesArr) {
  const note = body;

  notesArr.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArr, null, 2)
  );
  return note;
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
