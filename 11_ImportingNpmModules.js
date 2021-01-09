const validator = require("validator");
// import validator from "validator"; // Node does not support yet
const getNotes = require("./notes.js");

console.log(getNotes("09_notes.txt"));
console.log("Email:" + validator.isEmail("as@as.com"));
console.log("URL: " + validator.isURL("www.google.com"));
