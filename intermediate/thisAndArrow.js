// const name="Vivek";
// const roll=98;
// const obj = {
//   name: "Sahil",
//   rollNo: 45,
//   Arrow: () => {
//     console.log(this);
//   },
//   fun: function () {
//     let name = "Deepu";
//     console.log(`This is Normal function : ${this.Arrow}`);
//     console.log(this.Arrow);
//     const arr = () => {
//       console.log(this.name);
//     };
//     arr();
//     // this.Arrow();
//   },
// };
// obj.Arrow();
// const ArrowOuter=()=>{
//     console.log(this.name);
    
// }
// ArrowOuter();
// function Normal(){
//     console.log("Normal Function verification: ",this.name);
    
// }
// Normal();

 //   CONCLUSION :: Arrow function ObJECT ke andr global ko reference leta h declaration ke time but Normal function call ke time apna refence leta h jo ki object hota h 
 // Lekin Arrow function CLASS,FUNCTION ke andr apne Surronding ko ki refence leta h



(()=>{console.log("Sahil just Verifying the iife property on Arrow function");})();
(function sahil(ad){
    console.log(`passing arguement to iffe = ${ad}`);
    
})("SSSSSSSS");