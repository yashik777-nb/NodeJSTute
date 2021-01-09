// node filename argumets

console.log(process.argv);
console.log(process.argv[2]);

const command = process.argv[2];

if (command === "add") {
  console.log("Add Notes");
} else if (command === "remove") {
  console.log("Remove Note");
}

const yargs = require("yargs");

// customize yargs version
yargs.version("1.1.0");

// add, remove, read, list

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note");
  },
});

console.log(yargs.argv);
