'use strict';

// config/passport.js
var LocalStrategy       = require('passport-local').Strategy;
var User                = require('../app/models/user');

// expose this function to our app using module.exports
module.exports = function(passport) {
  passport.serializeUser(function(user, done){
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
      done(err, user);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }));



};
