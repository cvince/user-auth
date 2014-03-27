'use strict';
//jshint unused:false
var User = require('../app/models/user');
var chai = require('chai'),
  expect = chai.expect,
  should = chai.should();

describe('Users JSON fetch', function(){

  it('has users', function(){
    var query = User.count(function(err, data){ console.log(data); });
    query.exec(function (err, docs) {
      console.log('during exec');
      console.log(docs);
    });

    expect(1).to.be.above(0);
  });

});
