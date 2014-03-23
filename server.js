'use strict';

var express     = require('express.io');
var cons        = require('consolidate');
var app         = express().http().io();
var port        = process.env.PORT || 8888;
var mongoose    = require('mongoose');
var passport    = require('passport');
var flash       = require('connect-flash');
var configDB    = require('./config/database.js');

mongoose.connect(configDB.url);

require('./config/passport')(passport);

app.configure(function(){

  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());

  app.engine('html', cons.handlebars);
  app.set('view engine', 'html');

  app.use(express.session({secret: process.env.CHAT_APP_SECRET}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

});


//routes
require('./app/routes.js')(app, passport);

//sockets

var Post = require('./app/models/post')

app.io.route('connect', function(req){
  console.log('yay online!');
});


app.io.route('send-post', function(req){
  console.log(req.data);
  req.io.emit('update-tiles', req.data);

  var newPost = new Post();
  newPost.save(function(err){
    if(err) throw err;
    return done(null, newPost);
  })

});


//listen
app.listen(port);
console.log('online at port '+port);
