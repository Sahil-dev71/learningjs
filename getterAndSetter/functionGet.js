function User(name,email){
    this.name=name;
    email=email;
    Object.defineProperty(this,'name',{
        get:function(){
            console.log(`getter function of name : ${this._name}`);
            return this._name;
        },
        set:function(val){
            console.log("setter function of name");
            this._name=val;
        }
    })
    this. data=Object.getOwnPropertyDescriptor(this,'name')
}
const user1=new User("sahil","example@email.com");
user1.name="rahul";
console.log(user1.name);
console.log(user1.data);
let arr1=new Array(3,5,2,34);
let arr=[3,4,6,3];
console.log(arr.length);
console.log(arr1.length);


