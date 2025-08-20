const clock=document.querySelector("#clock");
// ------ error tha kyuki date class bahra declare h to wahi se wo fix ho gya
// const date=new Date();
// console.log();
// setInterval(()=>{
    
// },1000)
setInterval(() => {
    const date=new Date();
    const time=date.toLocaleTimeString();
    // console.log(time);
    
    clock.innerHTML=time
},1000);