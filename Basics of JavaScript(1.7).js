// for loop
console.log("for loop:");
for (let i = 0; i < 3; i++) {
    console.log("Iteration " + i);
}

// while loop
console.log("while loop:");
let count = 0;
while (count < 3) {
    console.log("Count " + count);
    count++;
}

// do...while loop
console.log("do...while loop:");
let number = 0;
do {
    console.log("Number " + number);
    number++;
} while (number < 3);

// for...in loop
console.log("for...in loop:");
let person = {
    name: "Alice",
    age: 25,
    occupation: "Engineer"
};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// for...of loop
console.log("for...of loop:");
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}
