'use strict';

//app/models/post.js

var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
  meta          : {
    date        : Date,
    time        : Date,
    content     : String,
    user        : String,
    location    : String
  }
})

module.exports = mongoose.model('Post', postSchema);
