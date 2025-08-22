// document.body.querySelector("#wall").onclick=()=>{
//     alert("wall image is clicked!!!");
// }
document.querySelector("#images").addEventListener("click",(e)=>{
    // console.log(e); 
    // console.log(e.target.parentNode);
    let removeImage=e.target.parentNode;
    if(!(removeImage.tagName==="UL")){
        removeImage.remove();
    }
    console.log("list click!!");
    
    // console.log(removeImage.tagName==="LI");
    
},true)
document.querySelector("#google").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("link click!!!");
    
},false)