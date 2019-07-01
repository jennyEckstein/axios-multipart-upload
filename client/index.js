const http = require("http");
const FormData = require('form-data');
const concat = require("concat-stream")
const axios = require('axios');
const fs = require('fs');
const request = require("request");
var wstream = fs.createWriteStream('./test.md');

async function onRequest(req, res) {
  try {
    console.log("JENNY req.body: ", req);
    // req.pipe(wstream);
    req
    .pipe(request.post('http://localhost:3002/'))
    .pipe(res);

    req.on('end', () => {
      console.log('END?');
    });
    return;
    const fd = new FormData();
    // fd.append('jennyFile', './README.md');
    // fd.append("jennyFile", fs.createReadStream('./README.md'));
    // fd.append("jennyFile1", fs.createReadStream('./README1.md'));
    // const config = { headers: { 'Content-Type': 'multipart/form-data' } };

    // const b64 = base64Img.base64Sync('./test.jpg').split('base64,')[1]
    // const form = new FormData()
    // form.append('b64_data', b64)
    // const headers = form.getHeaders()

    fd.pipe(concat({ encoding: 'buffer' }, async data => {
      const request = await axios.post(
        'http://localhost:3002',
        data,
        {
          headers: fd.getHeaders()
        });
        console.log("request: ", request);
    }))
    console.log("JENNY FORM DATA: ", fd);
    // console.log("JENNY : ", result.data);
    // res.end();
  } catch (error) {
    console.log("JENNY ERROR", error);
  }
}


http.createServer(onRequest).listen(3010);