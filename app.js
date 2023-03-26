// console.log("test1");
// const express = require("express");
// const path = require("path");
// const app = express();
// const http = require('http');
// console.log("test");
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


// http.createServer(function(req,res){
// 	console.log("http server start");
// 	res.writeHead(200,{'Content-Type': 'text/plain'});
// 	res.end('hello world')
// 	//res.statusMessage("dmd");
// }).listen(3000);

// //app.listen(3000,()=>(console.log("connected")));


var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(3000);

// Console will print the message
//console.log('Server running at http://127.0.0.1:8081/');