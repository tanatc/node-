var http=require("http");
var fs=require("fs");
var url=require("url");
var path=require("path");

var server=http.createServer(function(req,res){
    var requrl=req.url;
    var urlparse=url.parse(req.url);
    var pathname=urlparse.pathname;
    var iddexof=pathname.indexOf(".");//有点为非-1，无点为-1
    var nomal=path.normalize("static/" + pathname);
    var answer="requrl:"+requrl+"\n"+"urlparse："+urlparse+"\n"+"pathname:"+pathname+"\n"+"iddexof:"+iddexof+"\n"+"nomal:"+nomal
    console.log(answer);
    
    res.end(answer);
});

server.listen(3000,"127.0.0.1");
