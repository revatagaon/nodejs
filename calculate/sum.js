// Module protects their variable and functions from leaking

var x = "Hello World"

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum)
}

// module.exports = {
//   x: x,
//   calculateSum: calculateSum
// }

// OR

module.exports = { x, calculateSum }