const http = require("http");
var fs = require('fs');  // file system
var rstream = fs.createReadStream('./test.md');
var wstream = fs.createWriteStream('./test.md');

function onRequest(req, res) {
  var dataLength;
  console.log("JENNY INSIDE SERVER");
  // console.log(Object.keys(req));
  console.log(req);
  // console.log("---------")
  // console.log("files: ", req.files);
  // console.log("body: ", req.body);
  // console.log("file: ", req.connection);
  // res.write("success")
  

  rstream
  .on('data', function (chunk) {
    dataLength += chunk.length;
    console.log("JENNY DATA: ", chunk);
  })
  .on('end', function () {  // done
    console.log('The length was:', dataLength);
  });
  res.end();
}

http.createServer(onRequest).listen(3002);
