/*
050 Arrays and Objects
Exercise 5 of 10

## Arrays and objects in prototypes

Arrays and objects may not behave as you expect them.

Let's see what happens when you modify an array:

    var alien = {
        skills: ['morhp']
    }

    var zorg = {}
    zorg.__proto__ = alien

    zorg.skills.push('clone')

    console.log(zorg.skills);
    //=> morhp, clone
    // we expected this

    console.log(alien.skills);
    //=> morhp, clone
    // maybe we didn't expect this, we have modified the array in the prototype object.

When you change and array or an object you make the change directly on the object.
*/

var machine = {parts: [], capabilities: {}},
    robot = {},
    vehicle = {};

robot.__proto__ = machine;
vehicle.__proto__ = machine;

claim(robot.parts, []);
claim(vehicle.parts, []);
claim(robot.capabilities, {});
claim(vehicle.capabilities, {});

robot.parts.push('core');

claim(robot.parts, ["core"]);
claim(vehicle.parts, ["core"]);

vehicle.capabilities.fly = true;

claim(robot.capabilities, {fly: true});
claim(vehicle.capabilities, {fly: true});

module.exports = {
  machine: machine,
  vehicle:    vehicle,
  robot:    robot
}