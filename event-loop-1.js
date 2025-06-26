const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate called"));

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data:", data);
});

setTimeout(() => {
  console.log("setTimeout called after 0 seconds");
}, 0);

function printA() {
  console.log("Value of a:", a);
}

printA();

console.log("Last Line of the file");

// OutPut is as follows

// Value of a: 100
// Last Line of the file
// setTimeout called after 0 seconds
// setImmediate called
// File Data: This is the text file