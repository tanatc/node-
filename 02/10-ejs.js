var ejs=require("ejs");
//模板
var string="买了个iphone<%= a%>s";
//数据
var data={
    a:5
};
//数据绑定
var html=ejs.render(string,data);
console.log(html);