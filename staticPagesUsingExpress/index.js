//middleware is nothing but a request/event handler

const express = require('express');
const http = require('http');
const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;
const app = express();


app.use(morgan('dev')); //this says that the morgan logger middleware will be logging in dev environment.



//this servers static pages from __dirname/public
app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=> {
    //console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('content-type', 'text\html');
    res.end('<html><body><h1>this is an express server </h1></body> </html>');
});

const server = http.createServer(app);
server.listen(port, hostname, ()=>{console.log(`server is running at http://${hostname}:${port}`)});
