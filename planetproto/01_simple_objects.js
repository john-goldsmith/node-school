/*
010 Simple objects
Exercise 1 of 10

There are many way of creating objects in JavaScript, but the simplest way is
by using object literals:

    var alien = {
        legs: 3
    };

## Challenge

Write a program that:

  * Create an object called 'robot' using an object literal
  * robot should have a property 'smart' with value true
  * Claim the result robot.smart

## Boilerplate

A file 010.js with the necessary boilerplate has been created for you. This
files contains the instructions and placeholders for your code.

At the end of each boilerplate you will see a common js export
modules.exports = .... This is there to aid the verifier, please don't modify
that section.

Note the __ placeholders in the boilerplate. You should replace this with your own code.

## Claims

Sometimes the challenge will ask you to make a claim. We have provided claim as
a global function.

To make a claim write claim(actual, expected), e.g.:

    claim(1 === 1, true);
*/

var robot = {
  smart: true
};

claim(robot.smart, true);

module.exports = {
  robot: robot
}