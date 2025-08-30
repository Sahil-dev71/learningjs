class User{
//   #password;
//    _password; // this is not used to declare private property it's only convention in older version
    // name;
    constructor(value,name){
        // this.#password=value;
        this.password=value;
        this.name=name;
    }
    get password(){
        // console.log(this.#password);
        return this._password;
        
    }
    set password(password){
        this._password=password;
    }
    
}
const user1=new User(234,"sahil");
console.log(user1.password);
