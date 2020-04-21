var http=require("http");
var url=require("url");
var querystring=require("querystring");
var formidable=require("formidable");
var util = require("util");


var server=http.createServer(function(req,res){
    if(req.url=='/dopost' && req.method.toLowerCase()=='post'){
        var form=new formidable.IncomingForm();
        form.uploadDir = "./uploads";
        form.parse(req, function(err, fields, files) {
            if(err){
                throw err;
            }
            console.log(fields);
            console.log(files);
            console.log(util.inspect({fields: fields, files: files}));
            //所有的文本域、单选框，都在fields存放；
            //所有的文件域，files
            res.writeHead(200, {'content-type': 'text/plain;charset=UTF-8'});

            res.end("成功");
        });
    }
    
});

server.listen(8080,"127.0.0.1");