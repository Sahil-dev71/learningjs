// console.log(Math.PI);
// Math.PI=90;
// console.log(`is value changed : ${Math.PI}`);
const obj={
    name:"sahil",
    rollNo:57,
    course:"BTech",
    print:function(){
        console.log(this.name);
        console.log(this.rollNo);
        console.log(this.course);    
    }
}

// mtlb value to change ho rhi h 

obj.name="vivek";
console.log(obj);
const descriptor=Object.getOwnPropertyDescriptor(obj,"name");
console.log(`Default descriptor : `,descriptor);

Object.defineProperty(obj,"name",{
    writable:false,
    enumerable:false
});
obj.name="deepu";
let customizedDescriptor=Object.getOwnPropertyDescriptor(obj,"name");
console.log(`customized Descriptor : `,customizedDescriptor);

// console.log(obj);
for (const [key,value] of Object.entries(obj)) {
  if(typeof value!=="function"){
    console.log(`${key} : ${value}`);
  }    
}
