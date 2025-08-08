const { log } = require("console");

const obj={
    name:"Sahil",
    "full name":"Sahil gupta jiiii",
    rollNo:57
}

//////  CONCEPT OF DE-STRUCTURING OBJECTS  /////////

const {"full name":naam}=obj;
console.log(naam);
