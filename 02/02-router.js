var http=require("http");
var url=require("url");
var path=require("path");
var fs=require("fs");

var server=http.createServer(function(req,res){
    var pathname=url.parse(req.url).pathname;
    if(pathname.indexOf(".")==-1){
        pathname+="/index.html";
    }
    var fileUrl="./"+path.normalize("static"+pathname);
    var extname=path.extname(fileUrl);
    fs.readFile(fileUrl,function(err,data){
        if(err){
            res.writeHead(404,{"Content-Type":"text/html;charset=UTF8"})
            res.end("404,页面没有找到");
        }
        getMime(extname,function(mime){
            res.writeHead(200,{"Content-Type":mime})
            res.end(data);
        });
    });

});

server.listen(3000,"127.0.0.1");

function getMime(extname,callback){
    //读取mime.json文件，得到JSON，根据extname key ，返回对应的value
    //读取文件
    fs.readFile("./mime.json",function(err,data){
        if(err){
            throw Error("找不到mime.json文件！");
            return;
        }
        //转成JSON
        var mimeJSON = JSON.parse(data);
        var mime =  mimeJSON[extname]  || "text/plain";
        //执行回调函数，mime类型字符串，就是它的参数
        callback(mime);
    });
}