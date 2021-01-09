// Challenge: Use the chalk library in your project
//
// 1. Install version 4.1.0 of chalk
// 2. load chalk into our file
// 3. use it to print success to the console in green
// 4. test it.

const chalk = require("chalk");
console.log(chalk.green.bold.inverse("Success!"));

const miles = 18;
const calculateFeet = (miles) => miles * 5280;

console.log(chalk`
    There are {bold 5280 feet} in a mile.
    In {bold ${miles} miles}, there are {green.bold ${calculateFeet(
  miles
)} feet}.
`);
