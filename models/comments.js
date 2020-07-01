var mongoose = require('mongoose');

// SCHEMA
var CommentSchema = new mongoose.Schema({
    text : String,
    author : String
});
// MODEL
module.exports = mongoose.model('Comment',CommentSchema);