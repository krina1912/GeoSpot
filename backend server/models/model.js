const mongoose = require("mongoose");
var itemsSchema = new mongoose.Schema({
    name: String,
    description: String,
    location:String,
    timeline:String,
});
 

module.exports = new mongoose.model('Item', itemsSchema);
