// Imports
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// Function to create a new note upon POST request
function createNote(body) {
  let addedNote = body;
  addedNote.id = uuidv4();

  // Reads file from the db and sets it to an array we can work with
  let currentNotes = JSON.parse(
    fs.readFileSync('./db/db.json', 'utf8')
  );

  // Pushes the new note to that array and writes to the file the updated list
  currentNotes.push(addedNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(currentNotes));

  return currentNotes;
}

// Function to delete a note by the ID
function deleteNote(id) {
  let deletedNote = id;

  // Reads file from the db and sets it to an array we can work with
  let currentNotes = JSON.parse(
    fs.readFileSync('./db/db.json', 'utf8')
  );
  // Filters the db to a n ew array without the note that was selected & writes to file
  let filtered = currentNotes.filter(file => file.id !== deletedNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(filtered));

  return filtered;
}

module.exports = { createNote, deleteNote };
