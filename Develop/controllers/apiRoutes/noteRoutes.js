const router = require('express').Router();

const { notes } = require('../../db/db');

router.get('/', (req,res) => {
    res.json(notes);
})

module.exports = router;