const express = require("express");
var bodyParser = require("body-parser");
var axios = require("axios");
const cors = require("cors");
const mongoose = require("./db/db.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.listen(port, () => {
  console.log("Server is up on the port " + port + " !");
});

app.get("/", (req, res) => {
  console.log("Welcome to backend server");
  res.send("Hello this is backend server for medscape website");
});