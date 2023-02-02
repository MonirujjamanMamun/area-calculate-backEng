const express = require("express");
const bodyParser = require("body-parser");
const port = 5000 || process.env.PORT;

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});
app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

app.post("/circle", (req, res) => {
  const base = req.body.base;
  const total = Math.PI * base * base;
  res.send(`<h2>Circle area is ${total}</h2>`);
});
app.post("/triangle", (req, res) => {
  const height = req.body.height;
  const base = req.body.base;
  const total = 0.5 * height * base;
  res.send(`<h2>Triangle base is ${total}</h2>`);
});

app.listen(port, () => {
  console.log(port, `local server is runing http//:localhost:${port}`);
});
