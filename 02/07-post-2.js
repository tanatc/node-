var http=require("http");
var url=require("url");
var querystring=require("querystring");


var server=http.createServer(function(req,res){
    if(req.url=='/dopost' && req.method.toLowerCase()=='post'){
        var alldata="";
        req.addListener("data",function(chunk){
            alldata+=chunk;
            console.log(chunk);
        });
        req.addListener("end",function(){
            var datastring=alldata.toString();
            var dataObj=querystring.parse(datastring);
            console.log(dataObj);
            console.log(dataObj.name);
            console.log(dataObj.sex);

            res.writeHead(200,{"content-Type":"text/html;charset=UTF-8"});
            //console.log(123);
            res.write("nihao你好");
            res.end("成功");
        });
    }
    
});

server.listen(808,"127.0.0.1");