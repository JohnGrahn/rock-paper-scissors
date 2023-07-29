let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

const player = document.querySelector("#player-score");
const computer = document.querySelector("#computer-score");

player.textContent = `Player Score: ${playerScore}`;
computer.textContent = `Computer Score: ${computerScore}`;

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors'; 
    }
}
function checkForWinner() {
  if (playerScore >= 5 || computerScore >= 5) {
      // Game has finished, declare the winner
      let output = '';
      if (playerScore > computerScore) {
          output = "Congratulations, you are the winner!" + "<br>" + "Click a button to play again!";
      } else {
          output = "Sorry, the computer wins the game!" + "<br>" + "Click a button to play again!";
      }
      document.getElementById('output').innerHTML = output;

      playerScore = 0;
      computerScore = 0;
      document.getElementById('player').textContent = `Player Score: ${playerScore}`;
      document.getElementById('computer').textContent = `Computer Score: ${computerScore}`;
      return true;
  }
  return false;
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    let output = '';
  
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')

        
    ) {
        output = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    } else if (playerSelection === computerSelection) {
        output = `It's a tie. You both chose ${playerSelection}`;
    } else {
        computerScore++;
        output = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    document.getElementById('output').innerHTML = output
    checkForWinner();
    return
    
}


buttons.forEach(button =>{
  button.addEventListener('click', function(){
      playRound(button.value)
  })
})
