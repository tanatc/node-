var http=require("http");
var ejs=require("ejs");
var fs=require("fs");
var url=require("url");
var path=require("path");
var a_f=require("a_file.js");
var a_fs=require("a_files.js");
var a2="";
var server=http.createServer(function (req,res) {
    
    var a=url.parse(req.url).pathname;
    
    if(a=="/favicon.ico"){
        a="/";
    }
    a2=a2+a;
    console.log(a2);
    //var a_path=path.normalize(a);
    var a_files=[];
    
    var a_file=[];
   
    var content="";
    var paths=path.normalize("e:/前端/node/" +a);
    fs.stat(paths,function(err,stats){
        if (err) {
           console.log(err);
        }
        if(stats.isDirectory()){
            //是文件夹"
            fs.readdir(paths,function(err,files){
                if (err) {
                    return console.error(err);
                }
             var i=0;
             var j=0
             files.forEach(function(file){
                 //判断文件or文件夹
                if(file.indexOf(".")==-1){
                    //不是文件
                    var dir=a2+file;
                    a_files.push(new a_fs(dir,file));
                    console.log(a_files);
                    //a_fileshref=file;
                    //a_files[i++].filename=file;
                }else{
                    //是文件
                    var dir=a2+file;
                    a_file.push(new a_f(dir,file));
                    console.log(a_file);

                    //a_file[j].href=file;
                    //a_file[j++].filename=file;
                }
             });
            });
           
           //return dirfile;
        }else if(stats.isFile()){
            //同步读文件
            content=fs.readFileSync(paths, 'utf-8');
            
        }else{
            console.log("啥也不是");
        }
       
    });
    
    fs.readFile("./photograph.html",function (err,data) {
       var template=data.toString();
       var dictionary={
           a_files:a_files,
           /*[
               {"href":"456","filename":"456"},
               {"href":"456","filename":"456"}
            ],*/
            a_file:a_file,
            /*[
                {"href":"123","filename":"123"},
               {"href":"123.js","filename":"123.js"}
            ],*/
            content:content
       };
       var html=ejs.render(template,dictionary);
       res.writeHead(200,{"content-Type":"text/html;charset=UTF-8"});
       res.end(html);
    });
    
});

server.listen(8080,"127.0.0.1");

//node运行 相应多次造成req.url为/favicon.ico