// A JavaScript array is a list-like structure that can store multiple values
// in a single variable, where each value is assigned a numeric index starting from 0.

// Example:
const fruits = ["apple", "banana", "cherry"];

// Accessing elements
console.log(fruits[0]); // Outputs: apple
console.log(fruits[2]); // Outputs: cherry

// Modifying an element
fruits[1] = "orange"; // Changes "banana" to "orange"
console.log(fruits); // Outputs: ["apple", "orange", "cherry"]


// Length: The length property tells you how many elements are in the array.
console.log(fruits.length); // Outputs: 3


                                   // Common Array Methods
// push(): Adds a new element to the end of the array.
// pop(): Removes the last element from the array.
// shift(): Removes the first element from the array.
// unshift(): Adds a new element to the beginning of the array

fruits.push("grape");  // Adds "grape" to the end
console.log(fruits);   // Outputs: ["apple", "orange", "cherry", "grape"]

fruits.pop();          // Removes the last element
console.log(fruits);   // Outputs: ["apple", "orange", "cherry"]
