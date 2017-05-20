const express = require('express');
const fs = require('fs');

const app = express();

app.get('/books', (req, res) => {
  fs.readFile(process.argv[3], 'utf8', (err, file) => {
    res.json(JSON.parse(file));
  });
});

app.listen(process.argv[2]);