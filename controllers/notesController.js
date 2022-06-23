const { readFile, writeFile } = require('fs').promises;
const crypto = require('crypto');

// GET notes json
const getNotes = (req, res, next) => {
  readFile('./db/db.json', 'utf-8').then((data) => {
    const notes = [].concat(JSON.parse(data));
    res.json(notes);
  });
};

// POST new note to json
const postNote = (req, res, next) => {
  const note = req.body;
  readFile('./db/db.json', 'utf-8')
    .then((data) => {
      const notes = [].concat(JSON.parse(data));
      note.id = crypto.randomUUID()
      notes.push(note)
      return notes
    })
    .then((notes) => {
      writeFile('./db/db.json', JSON.stringify(notes));
      res.json(note);
    });
};

// DELETE note in json
const deleteNote = (req, res, next) => {
  const idToDelete = req.params.id;

  readFile('./db/db.json', 'utf-8')
    .then((data) => {
      const notes = [].concat(JSON.parse(data));
      const newNote = [];
      for (let i = 0; i < notes.length; i++) {
        if (idToDelete !== notes[i].id) {
          newNote.push(notes[i]);
        }
      }
      return newNote;
    })
    .then((notes) => {
      writeFile('./db/db.json', JSON.stringify(notes));
      res.send('Note ' + idToDelete + ' deleted!');
    });
};

module.exports = {
  getNotes,
  postNote,
  deleteNote,
};
