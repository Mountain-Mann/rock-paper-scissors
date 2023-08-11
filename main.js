const playerText = document.querySelector('#playerText');
const compText = document.querySelector('#compText');
const resultText = document.querySelector('#resultText');
const choiceBtns = document.querySelectorAll('.choiceButton');
const score = document.querySelector('.score');
const reloadBtn = document.querySelector('.reload');
let scoreboard = {
    player: 0,
    computer: 0
}
let computer;
let player;
let results;

choiceBtns.forEach(button => button.addEventListener('click', () => {
    
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    compText.textContent = `Computer: ${computer}`;
    resultText.textContent = `Result: ${checkWinner()}`;
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <br>
    <p>Computer: ${scoreboard.computer}</p>
    `;
}));


function computerTurn(){

    const randNum = Math.floor(Math.random() * 3 + 1)

    switch(randNum){
        case 1:
            computer = 'Rock';
            break;
        case 2:
            computer = 'Paper';
            break;
        case 3:
            computer = 'Scissors';
            break;
    }
};


function checkWinner(){
    if((computer == 'Rock') && (player == 'Paper')){
        scoreboard.player++;
        return 'You win!';
    }
    else if((computer == 'Rock') && (player == 'Scissors')){
        scoreboard.computer++;
        return 'You lose!';
    }
    else if((computer == 'Paper') && (player == 'Scissors')){
        scoreboard.player++;
        return 'You win!';
    }
    else if((computer == 'Paper') && (player == 'Rock')){
        scoreboard.computer++;
        return 'You lose!';
    }
    else if((computer == 'Scissors') && (player == 'Rock')){
        scoreboard.player++;
        return 'You win!';
    }
    else if((computer == 'Scissors') && (player == 'Paper')){
        scoreboard.computer++;
        return 'You lose!';
    }
    else {
        return 'Draw!';
    }
};


reloadBtn.addEventListener('click', (e) => {
    playerText.textContent = `Player: ${''}`;
    compText.textContent = `Computer: ${''}`;
    resultText.textContent = 'Result: ';    
    
    score.innerHTML = `
        <p>Player: ${scoreboard.player * 0}</p>
        <br>
        <p>Computer: ${scoreboard.player * 0}</p>
        `;
});

