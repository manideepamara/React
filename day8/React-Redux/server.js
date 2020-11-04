var http = require('http')
var server = http.createServer((req,res) => {
    res.writeHead(200);
    res.end("Hello React")
});

exports.listen = (port)=>{
    console.log("listening to port",port)
    server.listen(port);
}


exports.close = ()=>{
    server.close();
}