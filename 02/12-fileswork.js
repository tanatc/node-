var http=require("http");
var fs=require("fs");
var ejs=require("ejs");
//var read=require("read");

var server=http.createServer(function(req,res){
    
    var dirfile=[];
    var filedata="";
    var a="e:/前端/node/02/";

    fs.stat(a,function(err,stats){
        if(stats.isDirectory()){
            console.log("是文件夹");
            fs.readdir("e:/前端/node/02/",function(err,files){
                if (err) {
                    return console.error(err);
                }
             var i=0;
            // dirfile=[];
             files.forEach(function(file){
                 dirfile[i++]=file;
             });
            });
           //return dirfile;
        }else if(stats.isFile()){
            //同步读文件
            filedata=fs.readFileSync('e:/前端/node/02/display.ejs', 'utf-8');
            
           console.log(filedata);
        }else{
            console.log("啥也不是");
        }
       
    });

    
    fs.readFile("./display.html",function(err,data){
        var template=data.toString();
        var directionary={
            dirfiles:dirfile,
            filedatas:filedata
        };
        var html=ejs.render(template,directionary);
        console.log(filedata);
        res.writeHead(200,{"content-Type":"text/html;charset=UTF-8"});
        res.end(html);
    });

    //fs.mkdir();

    
});

server.listen(3000,"127.0.0.1");