var http=require("http");
var path=require("path");
var formidable=require("formidable");
var util=require("util");
var fs=require("fs");
var sd=require("silly-datetime");

var server=http.createServer(function(req,res){
    if(req.url=='/dopost'&&req.method.toLowerCase()=='post'){
        var form=new formidable.IncomingForm();
        
        form.uploadDir = "./uploads/1";
        form.parse(req,function(err,fields,files){
            if(err){
                throw err;
            }
            console.log(util.inspect({fields:fields,files:files}));
            var ttt=sd.format(new Date(),"YYYYMMDDHHmm");
            var ran=parseInt(Math.random()*80);
            var extname=path.extname(files.picture.name);
            var updir="/uploads/1/";
            var filename=files.picture.name;
            var oldpath=__dirname+'/'+files.picture.path;
            var newpath=__dirname+updir+ttt+'--'+ran+filename;
            fs.rename(oldpath,newpath,function(err){
                if(err){
                    throw Error("改名失败");
                }else{
                    res.writeHead(200,{'content-Type':'text/plain;charset=UTF-8'});
                    res.end("成功");
                }
            });
           
        });        
    }else if(req.url == "/"){
        //呈递form.html页面
        fs.readFile("./form.html",function(err,data){
            res.writeHead(200, {'content-type': 'text/html'});
            res.end(data);
        })
    }else{
        res.writeHead(404, {'content-type': 'text/html'});
        res.end("404");
    }
});

server.listen(8080,"127.0.0.1");