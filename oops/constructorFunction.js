const obj={
    name:"sahil",
    rollNo:"57",
    "live-in":"ghr wale allow nhi krenge pr rh skte h",
    This:function(){
        console.log(this);  
    }
}
 function user(name,rollNo){
    this.name=name;
    this.rollNo=rollNo;
    // console.log(this);
    return this;
 }
 this.a=90;
 console.log(this===module.exports);
 console.log(this);
 const newUser = new user("sahil",57);
 const newUser2=new user("vivek",68);
// console.log(`UserOne : ${newUser}`);
console.log(newUser);
// console.log(newUser2);

// obj.This();
