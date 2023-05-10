const getComputerChoice = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

function playRound(playerSelection, computerSelection) {
    // your code here!
    switch (playerSelection) {
     
        case 'rock':
            if (computerSelection === 'paper'){
                return 'You Lose! Paper beats Rock';
            }else if (computerSelection === 'scissors'){
                return 'You Win! Rock beats Scissors';
            }else{
                return 'Draw';
            }
            break;
        case 'paper':
            if (computerSelection === 'scissors'){
                return 'You Lose! Scissors beats Paper';
            }else if (computerSelection === 'rock'){
                return 'You Win! Paper beats Rock';
            }else{
                return 'Draw';
            }
            break;
        case 'scissors':
            if (computerSelection === 'rock'){
                return 'You Lose! Rock beats Scissors';
            }else if (computerSelection === 'paper'){
                return 'You Win! Scissors beats Paper';
            }else{
                return 'Draw';
            }
            break;
        default:
            return 'Invalid input';
    }
  }

  function game(){
        console.log(playRound(playerSelection, computerSelection));
        if(playRound(playerSelection, computerSelection).includes('Win')){
            userPoints++;
        }else if(playRound(playerSelection, computerSelection).includes('Lose')){
            computerPoints++;
        }
        console.log(`User: ${userPoints} Computer: ${computerPoints}`);
  }
  let playerSelection = getComputerChoice();
  const computerSelection = getComputerChoice();
  let userPoints = 0;
  let computerPoints = 0;

  while(userPoints < 5 && computerPoints < 5){
      game();
      if(userPoints === 5){
          console.log('You won the game!');
      }else if(computerPoints === 5){
            console.log('You lost the game!');
        }
    playerSelection = getComputerChoice();
  }

