const express = require("express");

let app = express();


app.post('/upload', (req, res, next) => {
  console.log("JENNY INSIDE SERVER");
  console.log(Object.keys(req));
  console.log(req.headers);
  console.log(req.body);
  res.end("success");
})


app.listen(3001, () => {
  console.log("Searver on 3001");
})