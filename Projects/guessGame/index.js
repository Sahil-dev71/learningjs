let randomNumber=parseInt(Math.random()*100+1);
console.log(randomNumber);
let removeChild=false;
const form=document.body.querySelector(".form");
const inputField=document.querySelector("#guessField");
const submitButton=document.querySelector("#subt");
const allGuesses=document.querySelector(".guesses");
const remaingGuesses=document.querySelector(".lastResult")
const lowOrHi=document.querySelector(".lowOrHi");
const resultPara=document.querySelector(".resultParas");


let maxGuesses=10;
let guessCount=1;
let gameAllowance=true;
if(gameAllowance){
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const guess=Number(inputField.value);
         validate(guess);
    })
}
function validate(guess){
    if(guess<1){
        alert("Number should be in between 1 to 100");
        inputField.value="";
    }else if(isNaN(guess)){
        alert("It seems that your guess is not a number");
        inputField.value="";
    }else if(guess>100){
        alert("Number should be in between 1 to 100");
        inputField.value="";
    }else{
        checkGuess(guess);
    }
}
function checkGuess(guess){
    updateContent(guess);
    if(guess<randomNumber){
        displayMessage("Your Number is Too low")
        inputField.value="";
    }else if(guess>randomNumber){
        displayMessage("Your Numver is Too high");
        inputField.value="";
    }else{
        inputField.value="";
        displayMessage("Horahhh! You won");
        endGame();
    }
}
function updateContent(guess){
     if(guessCount===maxGuesses){
        endGame();
    }
    console.log(guessCount);
    
    if(guessCount!==1){
        allGuesses.textContent+=`, `
    }
    allGuesses.textContent+=`${guess}`
    remaingGuesses.innerHTML=`${maxGuesses-guessCount}`
        guessCount++;

}
function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
    inputField.setAttribute("disabled","true");
    submitButton.setAttribute("disabled","true");
  if(!removeChild){
      const endMessage=document.createElement('p');
    endMessage.setAttribute("id","endMessage");
    endMessage.textContent="Game Over !!";
    resultPara.appendChild(endMessage);
    gameAllowance=false;
    newGameButton();
  }
    if(removeChild) resultPara.removeChild(endMessage);
}
function startNewGame(){
  

}
function newGameButton(){
    const button=document.createElement("button");
    button.textContent="Start New";
    button.type="button";
    resultPara.appendChild(button);
    button.addEventListener("click",(e)=>{
        removeChild=true;
        endGame();
        console.log(e);
        restartGame();
        resultPara.removeChild(button);
        removeChild=false;

    })
  
   
}
function restartGame(){
    inputField.removeAttribute("disabled");
    submitButton.removeAttribute("disabled"); 
    guessCount=1;
    gameAllowance=true;
    maxGuesses=10;
    remaingGuesses.innerHTML=`${maxGuesses}`;
    allGuesses.innerHTML="";
    randomNumber=parseInt(Math.random()*100+1);
    console.log(randomNumber);
    
}