const http = require("http");
const fs= require("fs");
const path = require("path")


// const server = http.createServer();

// server.on("request",function(req,res){
//     fs.readFile("./big.png",function(err,data){
//         if (err) throw err
//         res.end(data)
//     })
// }).listen(2020,console.log("the server stated exciting the picture"))

// const server = http.createServer(function(req,res){
//     fs.readFile("./big.png",function(err,data){
//         if (err) throw err
//         res.end(data)
//     })
// })
// // server.listen(2020,console.log("the server stated exciting the picture"))



// const server = http.createServer(function(req,res){
//     let resu=fs.readFileSync("./big.png");
//     res.end(resu)
// }).listen(9090)

const server = http.createServer()

server.on("request",function(req,res){
    fs.createReadStream("./big.png").pipe(res)
}).listen(9090)