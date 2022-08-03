
const buttons = document.querySelectorAll('.btn-choices');
const restartButton = document.getElementById('restart');
let resultDiv = document.getElementById('result');
let scoreDiv = document.querySelector('.score-board');
const userChoice = document.getElementById('user-element');
const compChoice = document.getElementById('comp-element');
const title = document.querySelector('.title');


let userScore = 0;
let computerScore = 0;



buttons.forEach(button => {
  button.addEventListener('click', function () {
    playRound(button.value);
  });
});
    
// Computer choice function
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];  
}

//Disable buttons
function disableButtons() {
  buttons.forEach(button => {
    button.disabled = true;
  })
}



// Game
function playRound(playerSelection) {
  let compSelection = computerPlay(); 
  let result = '';
    
  if (playerSelection === compSelection) {
    result = "It's a tie!"
  } else if ((playerSelection == 'rock' && compSelection == 'scissors') ||  
            (playerSelection == 'paper' && compSelection == 'rock') ||
            (playerSelection == 'scissors' && compSelection == 'paper')) {
  userScore ++;
  
  result = "You win: " + playerSelection + " beats " + compSelection + '. ';
            } else {
  computerScore ++;
  result = "You lose: " + compSelection + " beats " + playerSelection + '. ';
            }

  
  if (userScore === 5) {
    disableButtons();
    restartButton.classList.remove('visually-hidden');  
    result += `You win the game!<br> Press restart to play again.`;
    title.style.color = "rgb(27, 189, 27)";
  } else if (computerScore === 5) {
    disableButtons();
    restartButton.classList.remove('visually-hidden');  
    result += `You lose the game!<br> Press restart to play again.`;
    title.style.color = "red";
  }

console.log('user: '+ playerSelection + ' / comp: ' + compSelection);

// Add result and score to HTML
resultDiv.innerHTML = result;
scoreDiv.textContent = `${computerScore} : ${userScore}`;
choicesIcons(playerSelection, compSelection);



//Restart game
restartButton.addEventListener('click', () => {
  buttons.forEach(button => {
    button.disabled = false;
  });
  userScore = 0;
  computerScore = 0;

  scoreDiv.textContent = '';
  resultDiv.textContent = '';

  userChoice.classList  = 'fa-solid ';
  compChoice.classList = 'fa-solid ';
  restartButton.classList.add('visually-hidden');  

  title.style.color = 'white';
});

//Add choices icons
function choicesIcons(playerSelection, compSelection) {
  

   userChoice.classList = `fa-solid fa-hand-${playerSelection} active`;
   compChoice.classList = `fa-solid fa-hand-${compSelection} active`;
};
};





// function game() {
//     for (let i = 0; i < 5; i++) {
//     if(computerScore > userScore) {
//         return "You loose the game!"
//     } else if (userScore > computerScore) {
//         return "You win the game!"} else {
//             return "It`s a tie!"
//         }
// } 
    
//     }
    
