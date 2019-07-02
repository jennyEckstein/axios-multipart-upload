var request = require('request');
var fs = require('fs');
const url = "http://localhost:3000/";
const FormData = require('form-data');
const axios = require('axios');

// var newFile = fs.createReadStream('cat.jpg');

const form_data = new FormData();
form_data.append("file1", fs.createReadStream('cat.jpg'));
form_data.append("file2", fs.createReadStream('dog.jpeg'));

const request_config = {
  headers: {
    "Content-Type": "multipart/form-data"
  },
  data: form_data
};

return axios.post(url, form_data, request_config);

// var r = request.post("http://localhost:3000/");
// // See http://nodejs.org/api/stream.html#stream_new_stream_readable_options
// // for more information about the highWaterMark
// // Basically, this will make the stream emit smaller chunks of data (ie. more precise upload state)
// var catUpload = fs.createReadStream('test.md');
// var dogUpload = fs.createReadStream('test1.md');

// const streams = [catUpload, dogUpload];//.pipe(r);

// for (i in streams){
//   console.log("Stream:",streams[i]);
//   streams[i].pipe(r);
// }

// var upload_progress = 0;
// catUpload.on("data", function (chunk) {
//   upload_progress += chunk.length
//   console.log("Uploading Data: ", new Date(), upload_progress);
// })

// catUpload.on("end", function (res) {
//   console.log('Finished');
// })