const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/readfile/:id", (req, res, next) => {
  const pathOfFile = path.join(__dirname, req.params.id + ".txt");

  fs.readFile(pathOfFile, "utf8", (err, data) => {
    if (err) {
      return next(new Error("File not found or cannot be read!"));
    } else {
      res.json({ success: true, content: data });
    }
  });
});

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ success: false, message: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
