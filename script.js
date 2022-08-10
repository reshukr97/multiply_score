//We will be using Browsers Local storage to store SCORE
//Random function to have two random numbers.

const scoreEl = document.getElementById("score");
const questionEl = document.getElementById('question');
const inputEl = document.getElementById("input-text");
const btnEl = document.getElementById("btn");
const formEl = document.getElementById("form");


const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

questionEl.innerText = ` ${num1} * ${num2} ?` ;
const corrAns = num1 * num2;

let score =  JSON.parse(localStorage.getItem("score_val"));

if( !score)
{
    score = 0;
}

formEl.addEventListener("submit", ()=> {
    let userAns = +inputEl.value;

    if(userAns === corrAns)
    {
        score ++;
        updateLocalStorage();
    }
    else
    {
        score --;
        updateLocalStorage();
    }
});


//// Key:String, Values: String
function updateLocalStorage(){
        localStorage.setItem("score_val", JSON.stringify(score)); 
}

scoreEl.innerText = `score: ${score}`;



