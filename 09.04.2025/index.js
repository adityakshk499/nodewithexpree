const express = require("express");
const app = express();

app.get("/readfile", (req, res, next) => {
  const error = new Error("File Not Found");
  error.status = 500;
  return next(error);
});

app.get(/.*/, (req, res, next) => {
  const error = new Error("Endpoint Not Found");
  error.status = 404;
  return next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status).send({ success: false, message: err.message });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
