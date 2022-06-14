const choices = ['rock', 'paper', 'scissors'];

let userScore = 0;
let computerScore = 0;

function computerPlay() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
    
}


function playRound(playerSelection, compSelection) {
     // rock
  if (playerSelection === compSelection) {
      return "It's a tie!"
  } else if (playerSelection === 'rock' && compSelection === 'paper') {
      computerScore ++;
      return "You lose! Paper beats rock"
  } else if (playerSelection === 'rock' && compSelection === 'scissors') {
      userScore ++;
      return "You win! Rock beats scissors"
  } //paper
  else if (playerSelection === 'paper' && compSelection === 'rock') {
    userScore ++;
    return "You win! Paper beats rock"
  } else if (playerSelection === 'paper' && compSelection === 'scissors') {
    computerScore ++;
    return "You lose! Scissors beats paper"
  } // scissors
  else if (playerSelection === 'scissors' && compSelection === 'rock') {
    computerScore ++;
    return "You lose! Rock beats scissors"
  } else if (playerSelection === 'scissors' && compSelection === 'paper') {
    userScore ++;
      return "You win! Scissors beats paper"
  }

  console.log('user ' + userScore + '; comp ' + computerScore);
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please choose rock, paper or scissors: ").toLowerCase();
        //Check is input correct
        

        let compSelection = computerPlay(); 
       console.log(playRound(playerSelection, compSelection)); 
        
    }
    if(computerScore > userScore) {
        return "You loose the game!"
    } else if (userScore > computerScore) {
        return "You win the game!"} else {
            return "It`s a tie!"
        }
}


console.log(game());
