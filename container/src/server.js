const express = require("express");
const bodyParser = require("body-parser");

let PORT = 3000;

let server = express();
const middlewares = [
  express.static("dist"),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
];

server.use(middlewares);

server.get("/", (_, res) => {
  return res.send(`<!DOCTYPE html>
  <html>
    <head></head>
    <body>
      <div id="cart-container" />
      <script src="/main.js"></script>
    
  </html>
`);
});

server.listen(PORT, function () {
  console.log(`server listening on port: ${PORT}`);
});
