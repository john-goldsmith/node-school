/*
070 Dot New
Exercise 7 of 10


## Our own 'new'

At this stage we know enough to do amazing things with JavaScript objects.

## Challenge

  * Define an object called 'Robot'
  * Define a method called 'new' in Robot
  * When Robot.new is called is should return a new object with the prototype set to Robot e.g.

    var robby = Robot.new();
    // Robot should be the prototype of robby
*/

// -> When Robot.new is called is should return a new object with Robot as its prototype
//    e.g. var robby = Robot.new();
//    Robot should be the prototype of robby
var Robot = {
  new: function(){
    return Object.create(this);
  }
};

module.exports = {
  Robot: Robot
}