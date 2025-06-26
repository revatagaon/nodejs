const fs = require("fs");

setImmediate(()=>console.log("Set Immediate"));

setTimeout(() => console.log("Set TimeOut"), 0);

Promise.resolve().then(()=>console.log("Promise"));

fs.readFile("./file.txt", "utf8", ()=>{

  setTimeout(()=>console.log("2nd Set TimeOut"),0)

  process.nextTick(()=>console.log("2nd Next Tick"))
  
  setImmediate(()=>console.log("2nd Set Immediate"))

  console.log("File Reading CB")
})

process.nextTick(()=>console.log("Next Tick"))

console.log("Last Line of the File");

// OutPut is as follows

// Last Line of the File
// Next Tick
// Promise
// Set TimeOut
// Set Immediate
// File Reading CB
// 2nd Next Tick
// 2nd Set Immediate
// 2nd Set TimeOut