// node filename argumets

console.log(process.argv);
console.log(process.argv[2]);

const command = process.argv[2];

if (command === "add") {
  console.log("Add Notes");
} else if (command === "remove") {
  console.log("Remove Note");
}
