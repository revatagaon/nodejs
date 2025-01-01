const fs = require("fs")
const https = require("https")

console.log("Hello Words")

var a = 1078698;
var b = 20986;

// This file read is Synchronous (Which blocks the main thread, this is not recommended to use)
fs.readFileSync("./file.txt", "utf8")

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
})

setTimeout(() => {
  console.log("stTimeOut called after 5 Seconds")
}, 5000);

// This file read is Asynchronous
fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log("File Data :", data)
})

const multiplyFn = (a, b) => {
  const result = a * b;
  return result;
}

const c = multiplyFn(a, b)

console.log("Multiplication Result is :", c)