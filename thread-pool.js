const fs = require("fs");
const crypto = require("crypto")

process.env.UV_THREADPOOL_SIZE = 6; // Set the thread pool size to 4

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512",(err, key)=>console.log("1 - Pbkdf2 Done"))
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512",(err, key)=>console.log("2 - Pbkdf2 Done"))
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512",(err, key)=>console.log("3 - Pbkdf2 Done"))
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512",(err, key)=>console.log("4 - Pbkdf2 Done"))
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512",(err, key)=>console.log("5 - Pbkdf2 Done"))
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512",(err, key)=>console.log("6 - Pbkdf2 Done"))

fs.readFile("./file.txt", "utf8",()=>console.log("File Read CB"))

// The LibUV has 4 UV Threads and if there are more than 4 tasks then the remaininh tasks should wait until the thread becomes free
// the Order of the output may completely depends on the comletion of the tasks, whichever completes first, will be executed