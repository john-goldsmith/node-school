/*
Create an Express.js app that runs on localhost:3000, and outputs "Hello World!" when somebody goes to '/home'.
The port number will be provided to you by expressworks as the first argument of the application, ie. process.argv[2].

-----------------------------

HINTS

This is how we can create an Express.js app on port 3000, that responds with a string on '/':

  var express = require('express')
  var app = express()
  app.get('/', function(req, res) {
    res.end('Hello World!')
  })
  app.listen(3000)

Please use process.argv[2] instead of port number:

  app.listen(process.argv[2])
*/

var express = require("express"),
    app = express(),
    port = process.argv[2];

app.get("/", function(req, res){
  res.end("Hello World!");
}).listen(port);