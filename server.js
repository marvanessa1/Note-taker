const express = require('express');
const path = require('path');
const routes = require('./routes')

const app = express();
const PORT = 3001;

app.use(express.static('public'));

//
app.get('/notes', (req, res) => {
    //send the file 'notes.html'
    res.sendFile(path.join(__dirname, 'notes.html'));
});

app.get('/api/notes', (req, res) => {
    //send the file 'notes.html'
    res.json(/* send note data*/);
});

app.post('api/notes', (req, res) =>{
    //create (persist) data

    //access new note data from 'req'

    //Push it to my existing list of notes

    //write my updates note list to the 'db.json' file
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
