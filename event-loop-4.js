const fs = require("fs");

setImmediate(() => console.log("setImmediate called"));

setTimeout(() => console.log("Set TimeOut"), 0);

Promise.resolve().then(()=>console.log("Promise"));

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data CB");
});

process.nextTick(() => {
  process.nextTick(() => console.log("Inner Next Tick"));
  console.log("Next Tick")
});

console.log("Last Line of the file");

// OutPut is as follows

// Last Line of the file
// Next Tick
// Inner Next Tick
// Promise
// Set TimeOut
// setImmediate called
// File Data CB