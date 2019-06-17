const http = require("http");
var fs = require('fs');  // file system
var rstream = fs.createWriteStream('./test.md');

function onRequest(req, res) {
  console.log("JENNY INSIDE SERVER");
  console.log(Object.keys(req));
  console.log(req.headers);
  console.log("---------")
  console.log("files: ", req.files);
  console.log("body: ", req.body);
  // console.log("file: ", req.connection);
  res.write("success")
  

  // rstream
  // .on('data', function (chunk) {
  //   dataLength += chunk.length;
  // })
  // .on('end', function () {  // done
  //   console.log('The length was:', dataLength);
  // });
  // res.end();
}

http.createServer(onRequest).listen(3001);
