const fs = require('fs'); 
const util = require('util');


// promise version of fs.readFile
const readFile = util.promisify(fs.readFile);

const writeFile = (destination, content) => {
    fs.writeFile(destination, content, (err) =>
       err ? console.error(err) : console.info(`Data was successfully updated to db.json file`)
    )
    
}

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeFile(file, JSON.stringify(parsedData, null, 4));
      }
    });
  };

module.exports = { readFile, writeFile, readAndAppend};