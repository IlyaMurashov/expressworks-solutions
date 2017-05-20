const express = require('express');
const cry = require('crypto');

const app = express();

app.put('/message/:id', (req, res) => {
  const hash = cry.createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex');

  res.end(hash);
});

app.listen(process.argv[2]);