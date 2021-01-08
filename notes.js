console.log("utils.js");
const fs = require("fs");

const lastName = "IK";

const add = function (a, b) {
  return a + b;
};

const getNotes = function (path) {
  return fs.readFileSync(path, "utf-8");
};

module.exports = lastName;
module.exports = add;
module.exports = getNotes;
