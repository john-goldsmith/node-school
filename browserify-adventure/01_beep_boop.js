/*
First of all, make sure you have `browserify` installed as a command in
your $PATH.

You can do this by running:

  npm install -g browserify

If you get permission errors, try putting `sudo` in front of that command.

Once you have browserify installed, write a program that prints the string
'BEEP BOOP' using `console.log()`.

Compile your program with `browserify` and pipe the bundle into
`browserify-adventure verify` like this:

  browserify main.js | browserify-adventure verify

If you just want to run your solution without verifying you can do:

  browserify main.js | browserify-adventure run
*/

console.log("BEEP BOOP");