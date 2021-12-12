const multer = require("multer");
const fs = require("fs");
const nodersa = require("node-rsa");
const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
const PORT = process.env.PORT || 80;
const app = express();

app.use(express.json());

app.post('/decypher/', (req, res, next) => {
  const keyBuffer = req.files.key.data;
  const secretBuffer = req.files.secret.data;

  let privateKey = keyBuffer.toString();
  const decrypted = new nodersa(privateKey).decrypt(secretBuffer);

  res.send(decrypted);
});

app.get('/login/', (req, res) => {
  res.send("vasillesha55");
});
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
