var http=require("http");
var url=require("url");
var path=require("path");

var server=http.createServer(function(req,res){

    res.writeHead(200,{"content-Type":"text/html;charset=UTF-8"});
    console.log(123);
    res.write("nihao你好");
    res.end(123);

});

server.listen(3000,"127.0.0.1");