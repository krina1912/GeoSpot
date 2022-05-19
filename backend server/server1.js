// const express = require("express");
// var bodyParser = require("body-parser");
// var axios = require("axios");
// const cors = require("cors");
// const mongoose = require("./db/db.js");
// var itemModel = require('./models/model'); 

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const corsOptions = {
//   origin: "*",
//   credentials: true,
//   optionSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

// app.listen(port, () => {
//   console.log("Server is up on the port " + port + " !");
// });

// app.get("/", (req, res) => {
//   console.log("Welcome to backend server");
//   res.send("Hello this is backend server for GeoSpot");
// });

// var storage  = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
 
// var upload = multer({ storage: storage })
 
// app.get("/",(req,res)=>{
//     res.render("index");
// })
 
// app.post("/uploadphoto",upload.single('myImage'),(req,res)=>{
//     var img = fs.readFileSync(req.file.path);
//     var encode_img = img.toString('base64');
//     var final_img = {
//         contentType:req.file.mimetype,
//         image:new Buffer(encode_img,'base64')
//     };
//     imageModel.create(final_img,function(err,result){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(result.img.Buffer);
//             console.log("Saved To database");
//             res.contentType(final_img.contentType);
//             res.send(final_img.image);
//         }
//     })
// })

