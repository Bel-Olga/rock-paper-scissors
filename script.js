const buttons = document.querySelectorAll('.btn-choices');
const restartButton = document.getElementById('restart');
const userChoice = document.getElementById('user-element');
const compChoice = document.getElementById('comp-element');
const title = document.querySelector('.title');
const resultDiv = document.getElementById('result');
const scoreDiv = document.querySelector('.score-board');
const resultGameDiv = document.getElementById('game-result');

const choices = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;

//Add choices icons
const handleChoicesIcons = (playerSelection, compSelection) => {
  userChoice.classList = `fa-solid fa-hand-${playerSelection} active`;
  compChoice.classList = `fa-solid fa-hand-${compSelection} active`;
};

const renderGameResult = (playerSelection, compSelection, result) => {
  resultDiv.textContent = result;
  scoreDiv.textContent = `${computerScore} : ${userScore}`;
  handleChoicesIcons(playerSelection, compSelection);
}

// Computer choice function
function computerPlay() {
  const random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

//Disable buttons
function disableButtons() {
  buttons.forEach(button => {
    button.disabled = true;
  })
}

const isPlayerWin = (playerSelection, compSelection) => {
  return (playerSelection == 'rock' && compSelection == 'scissors') ||
    (playerSelection == 'paper' && compSelection == 'rock') ||
    (playerSelection == 'scissors' && compSelection == 'paper')
}

const handleRestartGame = () => {
  buttons.forEach(button => {
    button.disabled = false;
  });
  userScore = 0;
  computerScore = 0;

  scoreDiv.textContent = '';
  resultDiv.textContent = '';
  resultGameDiv.textContent = '';

  userChoice.classList = 'fa-solid ';
  compChoice.classList = 'fa-solid ';
  restartButton.classList.add('visually-hidden');
  resultGameDiv.classList.remove('result-win', 'result-lose');

  title.style.color = 'white';
}

const handleEndGameResult = (userScore, computerScore, result) => {

  if (userScore === 5) {
    restartButton.classList.remove('visually-hidden');
    resultGameDiv.textContent = `You win the game! Press restart to play again.`;
    title.style.color = "rgb(27, 189, 27)";
    resultGameDiv.classList.add('result-win');
    
  } else if (computerScore === 5) {
    restartButton.classList.remove('visually-hidden');
    resultGameDiv.textContent = `You lose the game! Press restart to play again.`;
    title.style.color = "red";
    resultGameDiv.classList.add('result-lose');
    
  }

  disableButtons();

}

// Game
function playRound(playerSelection) {
  let compSelection = computerPlay();
  let result = '';

  if (playerSelection === compSelection) {
    result = `It's a tie!`;
  } else if (isPlayerWin(playerSelection, compSelection)) {
    userScore++;
    result = `You win: ${playerSelection} beats ${compSelection}.`;
  } else {
    computerScore++;
    result = `You lose: ${compSelection} beats ${playerSelection}`;
  }

  if (userScore === 5 || computerScore === 5) {
    handleEndGameResult(userScore, computerScore, result);
  }

  console.log('user: ' + playerSelection + ' / comp: ' + compSelection);
  

  renderGameResult(playerSelection, compSelection, result);
};

buttons.forEach(button => button.addEventListener('click', () => playRound(button.value)));
restartButton.addEventListener('click', handleRestartGame);