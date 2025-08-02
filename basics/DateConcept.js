const date=new Date();
console.log(date.getFullYear());
const newDate=new Date(2025,0,11,5,34);
// newDate.setMilliseconds(45);
// console.log(newDate.getMilliseconds());
// console.log(newDate.toString());
const choices={
    weekday:"long",
    year:"numeric",
    month:"long"
}
// console.log(newDate.toLocaleDateString("IST",choices));
console.log(newDate.toLocaleString("default",choices));


