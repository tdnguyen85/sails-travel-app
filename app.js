// Start sails and pass it command line arguments
require('sails').lift(require('optimist').argv);
require('assert');
require('events');

var emitter = require('eventflow')();

// Match all routes
app.get('*', function(req, res){
  res.send(404);
});