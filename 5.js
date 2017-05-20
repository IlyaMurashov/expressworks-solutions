const express = require('express');
const styl = require('stylus');

app = express();

app.use(styl.middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2]);