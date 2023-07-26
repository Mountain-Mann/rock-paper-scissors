//declare array choices
const choices = ['rock', 'paper', 'scissors'];

//get computer choice by random
function getCompChoice () {
   selection = choices[Math.floor(Math.random()*choices.length)];
   return selection;
}
//get player choice by prompt
function getPlayerChoice () {
   let selection2 = prompt('Choose rock, paper, or scissors.');
   return selection2.toLowerCase();
}

let playerSelection = getPlayerChoice();
const computerSelection = getCompChoice();

//declare function to play a round
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log('It\'s a tie...');
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') || 
        (playerSelection === 'scissors' && computerSelection === 'rock')
        ) {console.log(`${(computerSelection)} beats ${playerSelection}! You lose...`);
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {console.log(`${(playerSelection)} beats ${computerSelection}! You win...`);
    } else {
        console.log('Please try again...');
    }
};
playRound(playerSelection, computerSelection);