var express=require("express");

var app=express();

app.get("/",function(req,res){
    res.send("jjj");
});

app.get(/^\/student\/([\d]{10})$/,function(req,res){
    res.send("学生信息，学号"+req.params[0]);
});

app.get("/teacher/:gonghao",function(req,res){
    res.send("老师工号"+req.params.gonghao);
});

app.use(express.static("./public"));//访问静态页面

app.listen(3000);