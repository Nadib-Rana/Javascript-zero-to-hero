// Declaring variables using let, const, and var

let age = 25;       // Using let: variable that can change
const pi = 3.14159; // Using const: constant value that cannot change
var name = "Alice"; // Using var: older way of declaring a variable

// Reassigning variables
age = 26;           // Allowed since 'age' was declared with let
name = "Bob";       // Allowed since 'name' was declared with var

// Example of block-scoping with let and const
if (true) {
    let x = 10;
    const y = 20;
    console.log(x); // 10
    console.log(y); // 20
}

// console.log(x); // Error: x is not defined (x is block-scoped)
// console.log(y); // Error: y is not defined (y is block-scoped)

// Variables declared with var are function-scoped
function testVar() {
    var z = 30;
    console.log(z); // 30
}
// console.log(z); // Error: z is not defined (z is function-scoped)
