const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from express retro rabbi!");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});