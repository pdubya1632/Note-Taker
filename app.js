
const express = require('express');
const path = require('path');
const crypto = require('crypto');

const { readFile, writeFile } = require("fs").promises;

// create app and assign port
const app = express();
const PORT = process.env.PORT;

// Express middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// GET notes json
app.get('/api/notes', (req, res) => {
  readFile('./db/db.json', 'utf-8').then((data) =>{
      const notes = [].concat(JSON.parse(data));
      res.json(notes);
  })
});

// POST new note to json
// write uuid?
app.post('/api/notes', (req, res) => {
  const note = req.body;
  readFile('./db/db.json', 'utf-8').then((data) => {
      const notes = [].concat(JSON.parse(data));
      note.id = notes.length + 1
      // note.id = crypto.randomUUID()
      notes.push(note);
      return notes;    
  }).then(( (notes) => {
      writeFile('./db/db.json', JSON.stringify(notes))
      res.json(note);
  }))
});

// DELETE note in json
// use uuid?
app.delete('/api/notes/:id', (req, res) => {
  
  const deleteNote = parseInt(req.params.id);

  readFile('./db/db.json', 'utf-8').then( (data) => {
      const notes = [].concat(JSON.parse(data));
      const newNote = [];
      for (let i=0; i<notes.length; i++){
          if (deleteNote !== notes[i].id){
            newNote.push(notes[i]);
          }
      }
      return newNote;
  }).then( (notes) => {
      writeFile('./db/db.json', JSON.stringify(notes))
      res.send('New note saved!');
  })
});

// GET for notes & index
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// GET for wildcard
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// port listener 
app.listen(PORT, () => {
  console.log(`App listening on Port: http://localhost:${PORT}`);
});
