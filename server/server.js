const express = require("express");

const app = express();
const port = 5000;
const router = require("./routes/index");

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
