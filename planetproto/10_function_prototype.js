/*
100 Function prototype
Exercise 10 of 10

## The 'function prototype'

Every function in JavaScript has a special property called ‘prototype’.

    function Alien(){
    }

    Alien.prototype

As confusing as it may sound, this ‘prototype’ property is not the real prototype (__proto__) of the function.

    Alien.__proto__ === Alien.prototype //=> false

This of course generates a lot of confusion as people use the term 'prototype' to refer to different things.
A good clarification is to always refer to the special 'prototype' property of functions as 'the function prototype', never just 'prototype'.

This ‘prototype’ property points to the object that will be assigned as the prototype of instances created with that function when using 'new'.

Confusing? This is easier to explain with an example:

    function Alien(name) {
        this.name = name;
    }

    // the function Alien has a prototype property
    // we can add properties to this function prototype
    Alien.prototype.kind = 'alien'

    // when we create a new object using new
    var zippy = new Alien('Zippy');

    // the __proto__ of the new object points to alien.prototype
    zippy.__proto__ == Alien.prototype //=> true

    // in the new object we have access to properties defined in Alien.prototype
    zippy.kind //=> alien

Here is a [diagram showing this relationship](https://docs.google.com/drawings/d/1AKJcvxs0t3iGtqkRV8rFAWlo7tojkOSwjfhr1NWaTb0/pub?w=889&h=482)

So if you create two instances of Alien, both will get Alien.prototype as their proto. So whatever you put there will be shared by the instances.

That is mostly everything there is to know about the JavaScript object model. Understanding how __proto__ and function.prototype are related will give you countless hours of joy and satisfaction, or maybe not.
*/

function Robot() {
  this.parts = [];
}

Robot.prototype.capabilities = [];

var robby = new Robot();
var cranky = new Robot();

claim(robby.parts, []);
claim(cranky.parts, []);
claim(robby.capabilities, []);
claim(cranky.capabilities, []);

robby.parts.push("core");
robby.capabilities.push("fly");

claim(robby.parts, ["core"]);
claim(cranky.parts, []);
claim(robby.capabilities, ["fly"]);
claim(cranky.capabilities, ["fly"]);

module.exports = {
    Robot:  Robot,
    robby:  robby,
    cranky: cranky
}