var http=require("http");
var express=require("express")

var app=express();

app.get("/student/:id",function(req,res){
    var id=req.params["id"];
    var reg=/^[/d]{6}$/;
    if(reg.test(id)){
        res.send(id);
    }else{
        res.send("请检查格式");
    }
    res.send(id);
});

app.listen(3000);
