/*
Let's do something, you know, from "real life"

Let's fetch JSON over HTTP... YAY!

Fetching JSON data from remote machines via AJAX is commonplace
on both the server and client.  Promises also happen to map to AJAX
particularly well.  Any AJAX request may either succeed or fail
and never both.  Promises may fulfill or reject and never both.

So wow.  Much similarity.  Very promising...

Let's use a new module called q-io to take advantage of its "http.read"
method which returns a promise for the value of a successful HTTP response body.

Install by typing

npm install q-io

Task

Fetch JSON from "http://localhost:1337" and console.log it.

There are several things you will want to know:

1. q-io's http module has a "read" method which returns a promise for the content
   of a successful (status 200) http request.
2. Parse the returned JSON and console.log it for much win.

This challenge is a bit tricky but the implementation is relatively straightforward.
If you get stuck, refer to the q-io documentation for clarification.
*/

var Qhttp = require("q-io/http")

Qhttp.read("http://localhost:1337")
.then(function(data){
  console.log(JSON.parse(data));
})
.then(null, console.log)
.done();