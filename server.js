// const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const drink = require("./api");

const data = require("./api");

const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  err ? "Server Error, try again" : `Server Run on port ${port}`;
});

// ---------------------------------

const api = (_, res) => {
  res.status(200).send(data);
};

app.get("/", api);
