const form=document.body.querySelector("form");
form.addEventListener("submit",e=>{
    // console.log(e);
    e.preventDefault();
    let height=parseInt(document.body.querySelector('#height').value);
    let weight=parseInt(document.body.querySelector("#weight").value);
    let result;
    // console.log(height , weight);

    if(height<=0||isNaN(height)){
        console.log("enter a valid height:",height);
        result=height;
    } else if(weight<=0||isNaN(weight))
        {
        console.log("enter a valid weight :",weight);
        result=weight;
        }else{
            let bmi=((weight/(height*height))*10000).toFixed(2);
            result=bmi;
            console.log(bmi);
        }
    document.body.querySelector("#results").innerHTML=`<p>your BMI is : ${result}</p>`
    if(!isNaN(result)){
        let output;
       if(result<=18.5){
        output="Under-Weight";
       }else if(result<=24.9){
        output="Normal";
       }else if(result<=29.9){
        output="Over-Weight";
       }else{
        output="Obesity";
       }
       document.body.querySelector(".output").innerHTML=`<p>You fall in ${output} section</p>`
    }

})