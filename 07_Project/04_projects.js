let random = parseInt(Math.random()* 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const lowOrhi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")
const p = document.createElement('p');

let prevGuess = [];
let numGuesses = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    guessValidate(guess);
  })
}

function guessValidate(guess){
  //
  if(isNaN(guess)){
    alert("please enter a valid number")
  }
  else if(guess < 1){
    alert("Please enter a number more than 1")
  }
  else if(guess > 100){
    alert("Please enter a number less than 100");
  }
  else{
    prevGuess.push(guess);
    if(numGuesses > 10){
      guessDisplay(guess);
      displayMessage(`Game Over. Random number was ${random}`)
      endGame();
    }
    else{
      guessDisplay(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  //
  if(guess === random){
    displayMessage(`You guessed it right`)
    endGame();
  }
  else if(guess < random){
      displayMessage(`Number is tooo low`)
  }
  else if(guess > random){
    displayMessage(`Number is tooo high`)
  }
}

function guessDisplay(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess} | `
  numGuesses++;
  remaining.innerHTML = `${11-numGuesses}`
}

function displayMessage(message){
  lowOrhi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
  //
  const newGamebtn = document.querySelector("#newGame")
   newGamebtn.addEventListener("click", function(e){
    
    random = parseInt(Math.random()* 100 +1 )
    prevGuess = []
    numGuesses = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuesses}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
   })
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame" class="cursor:pointer"> Start New Game</h2>`
  p.style.cursor='pointer'
  startOver.appendChild(p);
  playGame = false;
  newGame();
}




console.log(prevGuess)

