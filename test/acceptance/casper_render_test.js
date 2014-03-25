'use strict';
/*global casper*/

casper.test.begin('testing our REST API', 1, function suite(test) {

  casper.start('http://localhost:8888', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function(){
    // we will replace this test with real user acceptance tests later
    this.echo(this.getHTML('body'));
  });

  casper.run(function(){
    test.done();
  });

});
