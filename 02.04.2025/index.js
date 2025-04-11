const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Hello World from post");
});

app.get("/", (req, res) => {
  console.log(req.body);

  res.send("Hello World from get");
});

app.put("/", (req, res) => {
  console.log(req.body);

  res.send("Hello World from put");
});

app.patch("/", (req, res) => {
  console.log(req.body);

  res.send("Hello World from patch");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
