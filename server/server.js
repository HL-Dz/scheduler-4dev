const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const router = require("./routes/index");

app.use(cors());

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
