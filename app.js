require("./xyz") // one module into another
const data = require("./data.json")
// const calculateSum = require("./calculate/sum.js") // When you Export any one method or variable
// const obj = require("./calculate/sum.js") // Without Destructuring
// obj.calculateSum(a, b)
// console.log(obj.x)

console.log(data)
var a = 10;
var b = 20;

// const { x, calculateSum } = require("./calculate/sum.js") // With Destructuring
// const { calculateMultiply } = require("./calculate/multiply.js")

const { calculateSum, x, calculateMultiply } = require("./calculate")
calculateSum(a, b)
console.log(x)
calculateMultiply(a, b)

// console.log(globalThis === global)
