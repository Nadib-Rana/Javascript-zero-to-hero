// Function Parameter Destructuring:

function printPerson({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person = { name: "Bob", age: 30 };
printPerson(person);  // Name: Bob, Age: 30
