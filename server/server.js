const express = require("express");
const app = express();
const port = 5000;

app.get("/auth", (req, res) => {
  res.send("Working.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
