function randomColor(){
    const hex="0123456789abcdef";
    let color="#";
    for (let i = 0; i < 6 ;i++) {
        const random=Math.floor(Math.random()*16);
        // console.log(random);
        color+=hex[random];
    }
    return color;
}
// console.log(randomColor());

let intervalId;
document.querySelector("#start").addEventListener("click",()=>{
      if(!intervalId){
         intervalId= setInterval(()=>{
            document.body.style.backgroundColor=randomColor();
        },1000)
        console.log(intervalId);
      }

    })
document.querySelector("#stop").addEventListener("click",()=>{
    console.log(intervalId);
    
    clearInterval(intervalId)
    intervalId=null;
    console.log("stopped");
    
})
