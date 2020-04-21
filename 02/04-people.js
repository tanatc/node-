function people(name,sex,age){
    this.name=name;
    this.sex=sex;
    this.age=age;
}
people.prototype={
    sayhello: function(){
        console.log(this.name,this.sex,this.age);
    }
}
module.exports=people;//一个文件写一个类