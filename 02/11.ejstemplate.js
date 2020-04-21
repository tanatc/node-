var ejs=require("ejs");
var fs=require("fs");
var http=require("http");

var server=http.createServer(function(req,res){
    fs.readFile("./index.ejs",function(err,data){
        var template=data.toString();
        var dictionary={
            a:6,
            news:["fndasi","hhh","主任"]
        };
        var html=ejs.render(template,dictionary);
        //console.log(html);
        res.writeHead(200,{"content-Type":"text/plain;charset=UTF-8"});
        res.end(html);
    });
});

server.listen(8080,"127.0.0.1");