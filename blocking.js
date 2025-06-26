const crypto = require("crypto");

const a = 123456;
const b = 654321;

// pbkdf2 - Password-Based Key Derivation Function 2
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First Key is Generated")

crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512", () => {
  console.log("Second Key is Generated")
});

function multifyFn(a, b) {
  const result = a * b;
  return result;
}

const c = multifyFn(a, b);

console.log("The Multiplicaton Result is : ", c)