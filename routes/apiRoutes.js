const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const { readFile, writeFile, readAndAppend } = require('../helpers/fsUtils');
const path = require('path');
const { read } = require('fs');


//GET route to get note data stored in db.json file

router.get('/', (req, res) =>{
    readFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//POST route to post new notes to db

router.post('/', (req,res) =>{
    const{
        title,
        text,
    } = req.body;

    const newNote = {
        title: title,
        text: text,
        id: uuidv4,
    };
    readAndAppend(newNote, './db/db.json')
    res._construct('Note added successfully')

    res.sendFile( path.join(__dirname, '../public/notes.html'));
});

// router.delete('/:id', function (req, res) {

// });



module.exports = router;