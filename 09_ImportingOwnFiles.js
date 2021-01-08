const notes = require("./notes.js");

const firstName = "Yash";

console.log(firstName);
// console.log(utils(1, 2));

// Challenge: Define and use a function in a new file
//
// 1. Create a new file notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load the message and print the message

console.log(notes("07_notes.txt"));
