
const buttons = document.querySelectorAll('.btn');
const restartButton = document.getElementById('restart');
let resultDiv = document.getElementById('result');
let userScoreDiv = document.querySelector('.user-score');
let compScoreDiv = document.querySelector('.comp-score');



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
  
  result = "You win! " + playerSelection + " beats " + compSelection + '. ';
            } else {
  computerScore ++;
  result = "You lose! " + compSelection + " beats " + playerSelection + '. ';
            }

  
  if (userScore === 5) {
    disableButtons();
    result += "You win the game! Press restart to play again."
  } else if (computerScore === 5) {
    disableButtons();
    result += "You lose the game! Press restart to play again."
  }

console.log('user: '+ playerSelection + ' / comp: ' + compSelection);

// Add result to HTML
resultDiv.textContent = result;
userScoreDiv.textContent = `${userScore}`;
compScoreDiv.textContent = `${computerScore}`;

//Restart game
restartButton.addEventListener('click', () => {
  buttons.forEach(button => {
    button.disabled = false;
  });
  userScore = 0;
  computerScore = 0;

  userScoreDiv.textContent = '';
  compScoreDiv.textContent = '';
  resultDiv.textContent = '';
  
});
};


function game() {
    for (let i = 0; i < 5; i++) {
    if(computerScore > userScore) {
        return "You loose the game!"
    } else if (userScore > computerScore) {
        return "You win the game!"} else {
            return "It`s a tie!"
        }
}        
    }
    
