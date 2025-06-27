const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url === "/getSecretData") {
    res.end("There is no secret data here!");
  }
  res.end("Hello, World!");
})

server.listen(7777)

// This server is not reliable so Express JS Framework is required to achieve the same