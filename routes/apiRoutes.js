const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");



const { readFile, writeFile, readAndAppend } = require('../helpers/fsUtils');
const path = require('path');

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
        id: uuidv4(),
    };
    readAndAppend(newNote, './db/db.json')
    res._construct('Note added successfully')

    res.sendFile( path.join(__dirname, '../public/notes.html'));
});

// Post route to delete note post from the id 
router.delete('/:id', function (req, res) {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        const parsedData = JSON.parse(data);

        if (err) {
          console.error(err);
        } else {
          const filterNotes = parsedData.filter((note) =>{
              return note.id !== req.params.id;
          })
          console.log(filterNotes)
          fs.writeFile("./db/db.json", JSON.stringify(filterNotes), (err) =>
          err ? console.error(err): res.json(parsedData))
        }
      });
});

module.exports = router;