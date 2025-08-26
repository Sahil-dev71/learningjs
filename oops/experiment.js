
function call(userName,rollNo,email="default@gmail.com"){
    this.userName=userName;
    this.rollNo=rollNo;
    // return this;
    innerCall(email);
    // const innerData=new innerCall(email);
    // this.email=innerData;

    function innerCall(email){
        this.email=email;
        console.log(this);
        
        // return this;
    }
}
const data=new call("sahil",57);
console.log(data);
console.log(this);
console.log(globalThis);


console.log(`this is the global this :   ${this}`);

{/*
    1.) this refers to module.exports and globalThis refers to global object 
    2.) this.innercall refers to global object as you run the file you will see in console
    */}