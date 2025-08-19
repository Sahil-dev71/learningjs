const buttons=document.body.querySelectorAll(".button");
console.log(buttons);
// buttons.forEach(button=>{
//     // console.log(button);
//     document.addEventListener("click",e=>{
//         let className=e.target.className;
//         console.log(className);
        
//         let id=e.target.id;
//         if(className==="button"){
//          document.body.style.backgroundColor=id;
//         }
//     })
// })

// whole page 


document.addEventListener("click",e=>{
    document.body.style.backgroundColor=e.target.id;
    console.log(e.target.id);
    
})