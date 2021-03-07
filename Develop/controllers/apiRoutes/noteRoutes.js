const router = require('express').Router();

const { notes } = require('../../db/db');
const { findById, createNote, validateNote } = require('../../lib/notes');

// get all notes
router.get('/', (req,res) => {
    res.json(notes);
});

// get note by id
router.get('/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.post('/', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();
    const note = createNote(req.body, notes);
    console.log(note);
    res.json(req.body);
  });

module.exports = router;