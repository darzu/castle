var http = require('http');
var fs = require('fs');
var express = require('express');
var logger = require('morgan');

var server = express();

server.use(logger('dev'));
server.use(express.static(__dirname + '/'));

server.get('/game', function(request, response){
  response.send('Hello World!');
});

server.listen(3000/*port*/);

console.log('Server running at http://localhost:3000/');