/*
030 Dynamic lookups
Exercise 3 of 10

# Prototype lookups are dynamic

You can add properties to the prototype of an object at any time, the prototype chain lookup will find the new property as expected.

    var alien = {}

    var zippy = {}
    zippy.__proto__ = alien

    // zippy doesn't respond to kind at this point
    console.log(zippy.kind); //=> undefined

    // let's add kind to alien
    alien.kind = 'alien'

    // now zippy responds to kind
    // because it finds 'kind' in alien
    console.log(zippy.kind); //=> 'alien'

## Keypoints

  * Objects delegate property lookups to their prototype.
  * A prototype can be shared between objects.
*/

var machine = {}
var vehicle = {}
var robot = {}

vehicle.__proto__ = machine
robot.__proto__ = machine

claim(vehicle.motors, undefined);
claim(robot.motors, undefined);
machine.motors = 4;
claim(vehicle.motors, 4);
claim(robot.motors, 4);

module.exports = {
  machine: machine,
  vehicle: vehicle,
  robot:   robot
}