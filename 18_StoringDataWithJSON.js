const fs = require("fs");

// const book = {
//   title: "Book",
//   author: "Yash",
// };

// const bookJSONString = JSON.stringify(book);

// console.log(bookJSONString);

// fs.writeFileSync("JSONString.json", bookJSONString, "utf-8");

// const data = fs.readFileSync("JSONString.json", "utf-8");
// const bookJSON = JSON.parse(data);

// const data = fs.readFileSync("JSONString.json");
// const bookJSON = JSON.parse(data.toString());

// console.log(bookJSON);

// Challenge: Work with JSO and the file system
//
// 1. Change the Age and Name property using your info
// 2. Stringify the data and overwrite the info in the file
// 3. Test

const jsonData = fs.readFileSync("JSONString.json", "utf-8");
const jsonObject = JSON.parse(jsonData);
jsonObject.name = "Yash";
jsonObject.age = 99;
jsonObject.planet = "Mars";
const jsonString = JSON.stringify(jsonObject);

fs.writeFileSync("JSONString.json", jsonString);
