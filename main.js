let compScore = 0;
let playerScore = 0;

//declare array choices
const choices = ['rock', 'paper', 'scissors'];

//get computer choice by random
function getCompChoice () {
   selection = choices[Math.floor(Math.random()*choices.length)];
   return selection;
}

const computerSelection = getCompChoice();

const rock = document.querySelector('#btn');
const paper = document.querySelector('#btn2');
const scissors = document.querySelector('#btn3');

let playerSelection;

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
});
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
});
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
});


const results = document.querySelector('#results');

//declare function to play a round
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        results.textContent = 'It\'s a tie...';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'scissors') || 
        (playerSelection === 'scissors' && computerSelection === 'rock')
        ) {results.textContent = `Eh, ${(computerSelection)} beats ${playerSelection}! You lose...`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {results.textContent = `Sweet, ${(playerSelection)} beats ${computerSelection}! You win...`;
    } else {
        results.textContent = 'Please try again...';
    }
};

//playRound(playerSelection, computerSelection);

/*
for (i = 0; i < 5; i++) {
    playRound();
    if (results.textContent == `Eh, ${(computerSelection)} beats ${playerSelection}! You lose...`) {
        compScore = ++compScore;
    } else if (results.textContent == `Sweet, ${(playerSelection)} beats ${computerSelection}! You win...`) {
        playerScore = ++playerScore;
    } else if (results.textContent = 'It\'s a tie...') {
        //no points
    }
}
*/

const container = document.querySelector('#container');

const score = document.createElement('div');
score.classList.add('score');
score.textContent = '`The score is ${} to ${}`';