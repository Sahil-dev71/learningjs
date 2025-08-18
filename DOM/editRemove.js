function removeNthElement(index){
    const ele=document.querySelector(`li:nth-child(${index})`)
    ele.remove();
}
// removeNthElement(1);
// removeNthElement(1);

function editNthElement(index,text){
    const newEle=document.createElement("li");
    //     Approach 1
    // const text=document.createTextNode("Nomday")
    // newEle.appendChild(text);
    // Approach 2
    newEle.appendChild(document.createTextNode(`${text}`));  /*ye thoda different h */
    console.log(newEle);
    
    const nthEle=document.querySelector(`li:nth-child(${index})`);
    // console.log(nthEle+"hello");
    // nthEle.replaceChild(newEle);
    nthEle.replaceWith(newEle)
    // console.log(nthEle);
    
    
}
editNthElement(2,"oh mera yasu yasu mera yasu yasu")