let arr=["Sahil","Deepu","Tushar","Alok"];
let arrOfObject=[
    {
        name:"sahil",
        class:12,
        caste:"Baniya"
    },
    {
        name:"Deepu",
        class:10,
        caste:"Jai Bheem"
    },
    {
        name:"Tushar",
        class:9,
        caste:"Dont't Know"
    },
    {
        name:"Alok",
        class:12,
        caste:"Rajput"
    }
];
const obj={
    name:"sahil",
        class:12,
        caste:"Baniya"
}
let string="Hello Sahil ji";
const map=new Map();
map.set("valOfME","nothing");
map.set("valOfHer","something-something");
map.set("valOfHis","nothing-nothing");
// SAME KEY BSS EK HI VALUE KO BAAR-BAAR UPDATE KR RHA H

// let string="Hello Sahil ji";
// const map=new Map();
// map.set("val","nothing");
// map.set("val","something-something");
// map.set("val","nothing-nothing");
//------------------------------------------------------------------
//       LOOPS
//------------------------------------------------------------------
//     for-of Loop

for (const name of arr) {
    // console.log(name);
    
}
for (const object of arrOfObject) {
    // console.log(object.caste);
    
}
// for (const object of obj) {
//     // console.log(object);
//     // Object is not iterable and remember that emmit of for-of loop's object is not pointing the object it's simply points the iterables
// }
//------------------------------------MAP----------------------------

// for (const values of map) {
//     console.log(values);  
// }

for (const [key,values] of map) {
    // console.log(values);    
}
//-------------------------OBJECT-------------------------------
for (const object of Object.values(obj)) {
    // console.log(object);
}



//-------------------   FOR-IN LOOP   ---------------------------------
for (const key in obj) {
//    console.log(obj[key]);
  /// by default key print krta h  
}
for (const [key,value] in map) {
    // console.log(key);
   // map iterable nhi h for-in loop m 
}
for (const key in arr) {
//    console.log(arr[key]);
   
}


//----------------------   FOR-EACH LOOP   -----------------
arr.forEach((value,index,array)=>{
    console.log(value,arr);
    
})