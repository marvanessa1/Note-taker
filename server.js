const express = require('express');
const path = require('path');
const routes = require('./routes')

const app = express();
const PORT = 3001;

app.use(express.static('public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// app.get('/api/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/notes.html'));
// });

app.post('api/notes', (req, res) =>{
    //create (persist) data

    //access new note data from 'req'

    //Push it to my existing list of notes

    //write my updates note list to the 'db.json' file
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
