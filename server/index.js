require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const { PORT } = require("./env");

app.use(cors());

app.listen(PORT, () => {
  console.log(`PORT listening on ${PORT}`);
});
