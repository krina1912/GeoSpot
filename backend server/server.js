const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

const mongoose = require("./db/db.js");
var itemModel = require('./models/model'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let gfs;

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
  res.send("Hello this is backend server for GeoSpot");
});

app.get("/",(req,res)=>{
    res.render("index");
})
 
app.post("/form",async(req,res)=>{

    const data = req.body;
    var newItem =  new itemModel(data);
    try {
        await newItem.save();
        console.log("New item added");
        console.log(newItem);
        res.status(201).send("Successfully added");
      } catch (error) {
        res.status(400).send(error);
      }

    
})

