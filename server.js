var http = require('http');
var fs = require('fs');
var express = require('express');
var logger = require('morgan');

var server = express();

server.use(logger('dev'));
server.use(express.static(__dirname + '/public'));

var indexHtml = fs.readFileSync(__dirname + '/public/index.html');

server.get('/', function(request, response){
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(indexHtml);
  response.end();
});

server.listen(3000/*port*/);

console.log('Server running at http://localhost:3000/');