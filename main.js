function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie...");
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log("Paper beats rock! You lose...");
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log("Rock beats scissors! You win...");
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log("Paper beats rock! You win...");
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log("Scissors beat paper! You lose...");
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log("Rock beats scissors! You lose...");
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log("Scissors beat paper! You win...");
    } else {
        console.log("Please try again...");
    }
}
const playerSelection = getPlayerChoice();

const choices = ['rock', 'paper', 'scissors'];

function getCompChoice () {
   selection = choices[Math.floor(Math.random()*choices.length)];
   return selection;
}
function getPlayerChoice () {
    selection2 = prompt().toLowerCase;
    return selection2;
}

const computerSelection = getCompChoice();

console.log(playRound(playerSelection, computerSelection));