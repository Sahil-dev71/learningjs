const obj={
    name:"Sahil",
    rollNo:45,
    Arrow: ()=>{
        console.log(this.name);
        
    },
    fun :function() {
        let name="Deepu";
        // console.log(`This is Normal function : ${this.Arrow}`);  
        console.log(this.Arrow);
        const arr=()=>{
            console.log(this.name);
            
        }
        arr();
        // this.Arrow();
        obj.Arrow();
    }
}
obj.fun();
//   function ke andr to arrow function 
