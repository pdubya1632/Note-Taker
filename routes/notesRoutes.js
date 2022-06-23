const express = require('express');
const router  = express.Router(); 
const notesController = require('../controllers/notesController'); 

router.get('/notes', notesController.getNotes)
router.post('/notes', notesController.postNote)
router.delete('/notes/:id', notesController.deleteNote)

module.exports = router;