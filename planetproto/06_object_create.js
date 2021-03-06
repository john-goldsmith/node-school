/*
060 Object Create
Exercise 6 of 10

## Object.create

As explained before __proto__ is not a well supported way of assigning prototypes to objects. So the next simplest way is using Object.create(). This is available in ES5, but old browsers / engines can be shimmed using this [es5-shim](https://github.com/kriskowal/es5-shim).

    var alien = {
        kind: 'alien'
    }

    // creates a new object which prototype is alien
    var zack = Object.create(alien);

    console.log(zack.kind); // => ‘alien’

You can pass an object to Object.create to add specific properties for the new object

    var zack = Object.create(alien, {age: {value:  13} });
    console.log(zack.age); // => ‘13’

Yes, the object you need to pass is a bit convoluted, but that is the way it is. See the docs [here](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/create).

### Object.getPrototype

You can get the prototype of an object using Object.getPrototypeOf

    var zack = Object.create(alien);
    Object.getPrototypeOf(zack); //=> alien

There is no such thing as Object.setPrototype.
*/

var machine = {};
var robot = Object.create(machine)
var robby = Object.create(robot);

claim(machine.isPrototypeOf(robby), true);
claim(robot.isPrototypeOf(robby), true);
claim.same(Object.getPrototypeOf(robby), robot);

module.exports = {
  machine:  machine,
  robot:    robot,
  robby:    robby
}