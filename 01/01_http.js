var http = require("http");
var url=require("url");

var server=http.createServer(function(req,res){
	
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
	res.write("nihao你是个傻子\n");
	res.write("<h1>这是一个标题标签测试</h1>");
	var pathname=url.parse(req.url).pathname;
	var query=url.parse(req.url,true).query;
	var age=query.age;
	console.log("req.url:" + req.url);
	console.log("pathname:" + pathname);
	console.log("query:" + query);
	console.log("age:" + age);
	res.write("req.url:" + req.url);
	res.write("pathname:" + pathname);
	res.write("query:" + query);
	res.write("age:" + age);
  	res.end();

});
server.listen(3000,"127.0.0.1");

