var request = require('request');
var fs = require('fs');

var r = request.post("http://localhost:3000/");
// See http://nodejs.org/api/stream.html#stream_new_stream_readable_options
// for more information about the highWaterMark
// Basically, this will make the stream emit smaller chunks of data (ie. more precise upload state)
var upload = fs.createReadStream('cat.jpg');

upload.pipe(r);

var upload_progress = 0;
upload.on("data", function (chunk) {
  upload_progress += chunk.length
  console.log("Uploading Data: ", new Date(), upload_progress);
})

upload.on("end", function (res) {
  console.log('Finished');
})