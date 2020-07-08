var mongoose = require('mongoose');

// SCHEMA
var ProductSchema = new mongoose.Schema({
    name     : String,
    image    : String,
    disc     : String,
    price    : Number,
    category : String, 
    comments : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref  : "Comment"
    }]
});

// MODEL
module.exports = mongoose.model('Product',ProductSchema);