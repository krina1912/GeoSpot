const mongoose = require("mongoose");
var itemsSchema = new mongoose.Schema({
    name: String,
    description: String,
    location:String,
    timeline:String,
});
 
//Image is a model which has a schema imageSchema
 
module.exports = new mongoose.model('Item', itemsSchema);