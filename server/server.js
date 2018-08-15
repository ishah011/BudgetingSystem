const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

//Using middleware
app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());

// Catch all other routes requests and return it to the index
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

var port = process.env.PORT || 4600;
app.listen(port, (req, res) => console.log(`Example app listening on port ${port}!`));

module.exports = app;
