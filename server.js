//The purpose of this file is to create, configure, and run a
// server which will eventually serve our game to web browsers.

//This imports node's "http" module. The http module is used for
// communicating over the http protocal which is the most common
// protoccal used on the web today. Most sites you visit will 
// have either 'http://' or 'https://' in their url.
var http = require('http');
//This imports node's file system ('fs') module. This lets you
// read and write to files on your hard drive.
var fs = require('fs');
//This imports a 3rd-party helper module called 'express'.
// express makes it easiert to get going quickly with basic
// server stuff.
var express = require('express');
//This imports a 3rd-party helper module called 'morgan'. Morgan
// is an extension to Express. Morgan is used for logging.
// Logging is the act of writing a message to a log. For our
// purposes the log will just be dumped right into your console
// window.
var morgan = require('morgan');

//This creates a new logger object in 'dev' mode. The logger was
// created by the 3rd-party module called morgan. 'morgan' is a
// function and we are invoking it with a text parameter 'dev'.
var logger = morgan('dev');

//This creates a new server configuration using express. This is
// a function invokation. 'express' is the function name. The
// '()' means that we are calling that function. Since there is
// nothing between the parenthesis, we are passing no data into
// the function call. 'server' is a variable we will be saving 
// our new server configuration object that the function returns
// into.
var server = express();

//This tells the server to use the new logger we created above.
// This line called the function 'use'. 'use' is a function that
// exists on the 'server' object. It was put there when the 
// server object was created by Express. We can access it by
// specifying 'server.use'. The dot ('.') notation is used to
// to access "properties" on "objects". 'server' is an object.
// 'use' is a property. 'use' is also a function.
server.use(logger);

//'__dirname' is a special variable set magically for us by
// node. Its value is the full path to the location where the
// server is running. Here we are combining that file path with
// the path '/public'. This creates a full path to the 'public'
// folder that is right next to this file. Combining text in
// this way is called "string concatination".
var pathToPublicFolder = __dirname + '/public'

//This cryptic line of code tells the server that browsers are
// free to access any files located under the 'public' folder.
// More technically: the server will serve urls that match
// file paths in the 'public' folder with the files they match.
// For example if the user visists
// "http://localhost:3000/index.html", they will recieve the
// the file "public/index.html".
server.use(express.static(pathToPublicFolder));

//This causes the server to start "listening" on port 3000.
// Listening in technical speak is the act of waiting for 
// "requests" from clients and serving "responses". Basically
// what this does is start the server. Up until now we've just
// been configuring the server. Now we are actually running
// it. Ports are like special network doors on your computer.
// Anything on your computer that needs to talk to things on
// the web needs to go through one or more of these ports.
// For websites, the standard doors to use are 80 and 8080 for
// http and https trafic respectively. If we were hosting this
// website for real users, we would probably host on port 80.
// This is because web browsers automatically hide your port
// number if your port is 80 or 8080. For example, google.com
// is hosted on port 80. So it's url should look like this:
// "http://google.com:80". However, since 80 is the default,
// browsers just go ahead and hide that from you and you just
// see "http://google.com". Pretty much every website in the
// world uses port 80 or 8080 for this reason. If we wanted
// our url to look pretty too than we'd also use port 80.
// But since we're just messing around for now, it is easier
// to use a different, obscure port like port 3000. (It is
// a hassle hosting a server on port 80 on windows or mac 
// because it usually requires administrator privlages.)
server.listen(3001/*port*/);

//This simply logs a message to our console.
console.log('Server running at http://localhost:3001/');