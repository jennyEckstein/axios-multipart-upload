var fs = require('fs');
var express = require('express');

var app = express();
app.post('/', function (req, res, next) {
  console.log("HERE")
  req.pipe(process.stdout);
  req.pipe(fs.createWriteStream('./cat4.jpg'));
  req.on('end', next);
});

app.listen(3000);