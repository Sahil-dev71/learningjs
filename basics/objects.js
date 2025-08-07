const obj={
    name:"Sahil",
    "full name":"Sahil Gupta",
    isFeatured:true,
    age:18
}
// console.log(Object.hasOwnProperty(isFeatured));
// console.log(obj.hasOwnProperty("isFeatured"));
const obj1={a:1,b:2,c:3}
const obj2={d:4,e:5,f:6}
// const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2}
console.log(obj3);
console.log(obj1);
const obj4={
    name:'sahil',
    roll_no:57,
    "full name":{
        name:{
            "first name":'sahil',
            "last name":"Gupta"
        }
    }
}
console.log(obj4["full name"].name["last name"]);
