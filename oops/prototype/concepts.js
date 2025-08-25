function user(name,marks) {
    this.name=name;
    this.marks=marks;
    let mark=56;
    // return this;
}
user.prototype.increment=function(){
    this.marks++;
    console.log(this.mark);
    
    // return this.marks;
}
const chai=new user("sahil",54);
console.log(chai);
// console.log(chai.increment()); 

// ye undefined isiliye h kyuki increment kuchh return thodi kr rha h ("uff ye choti choti mistakes /****")
chai.increment();
console.log(chai.marks);

// user("sahil",67); // prototype to object initiation se bnega n