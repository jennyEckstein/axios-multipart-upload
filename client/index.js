const express = require("express");
const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');
let app = express();

// https://github.com/axios/axios/issues/318

app.listen(3000, () => {
  console.log("Client on 3000");
})


app.get('/', (req, res, next) => {
  try {

    // const formData = new FormData();
    // formData.append('file', './README.md');
    // const config = { headers: { 'Content-Type': 'multipart/form-data' } };

    const b64 = base64Img.base64Sync('./test.jpg').split('base64,')[1]
    const form = new FormData()
    form.append('b64_data', b64)
    const headers = form.getHeaders()

    const result = axios.post(
      'http://localhost:3001/upload',
      formData);
    res.send("success1")
  } catch (error) {
    console.log("JENNY ERROR", error);
  }

});