function call(userName,rollNo,email="default@gmail.com"){
    this.userName=userName;
    this.rollNo=rollNo;
    // return this;
    innerCall.call(this,email);
    // const innerData=new innerCall(email);
    // this.email=innerData;

}
function innerCall(email){
    this.email=email;
    // return this;
}
const data=new call("sahil",57);
console.log(data);
