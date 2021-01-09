const fs = require("fs");

fs.writeFileSync("09_notes.txt", "Hello Yash", (err) => {
  console.log("Failed");
});

// Challenge -> Append a message to notes text
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Validate the file

fs.appendFileSync("notes.txt", "Hello Yash");
