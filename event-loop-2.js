const fs = require("fs");

const a = 100;

setImmediate(() => console.log("setImmediate called"));

// Following both promises will work as expected

// Promise.resolve("Promise").then((value) => console.log(value));
Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8",()=>console.log("File Reading CB"));

setTimeout(() => console.log("Set TimeOut Called"), 0);

process.nextTick(() => console.log("Process Next Tick Called"));

function printA() {
  console.log("Value of a:", a);
}

printA();

console.log("Last Line of the file");

// OutPut is as follows
// Value of a: 100
// Last Line of the file
// Process Next Tick Called
// Promise
// Set TimeOut Called
// setImmediate called
// File Reading CB