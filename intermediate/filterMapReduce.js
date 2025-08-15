// Trying custom filter in filter method of array for future project 
// let rangeLower=600;
// let rangeUpper=1600;
// function productsByPrice(val){
//     return (rangeLower < val && val<rangeUpper);
// } 
// console.log(productsByPrice(444));
const arr=[
    {
        product:"Pen",
        price:10,
    },
    {
        product:"Bag",
        price:800,
    },
    {
        product:"Uniform",
        price:748,
    },
    {
        product:"Board",
        price:544,
    }

];
// const filteredProduct=arr.filter((item)=>productsByPrice(item.price))
// console.log(filteredProduct);

//---------------- trying return concept in array for-Each Loop  -----------------------

const num =arr.forEach((item)=>{
    return item.price>100;
})||true;
console.log(num);

//------------- Trying Reduce method of array in arr ----------------------
const reducedValue=arr.reduce((acc,curr)=>{
    console.log(`current accumulator balue : ${acc}`);
    return acc+curr.price},0)
console.log(reducedValue);
