// var global.a=90;
// console.log(this==module.exports)
console.log(this==globalThis)

// global.c=34;
c=90;
module.exports.fun=function name() {
    console.log("heloo Dostoooo....");
    
}
module.exports.name="SAhil";
console.log(this);
// console.log(global);
// console.log(globalThis.c);
// return 44;



// console.log(global);
/*
Nodejs me js file ek function me run hoti h na ki globally or uss function ka naam module hota h tbhi var browser m window(jo ek
global object h) sme add ho jata but Nodejs m nhi kyuki Nodejs m wo function m module scope m add ho jata h
 or 
 let,const ye to dono hi browser or Nodejs m global m add nhi hote h ye alg memory space m add hote h
 var ke trh function ka bhi same scene he dono m
*/

