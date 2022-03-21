const playButtons = document.querySelectorAll('.play-button');
const roundsPlayed = document.querySelector('.round');
const selections = document.querySelector('.selection');
const scores = document.querySelector('.score');
const result = document.querySelector('.result');
const winner = document.querySelector('.winner');
const newGame = document.querySelector('.button');

let playerScore = 0;
let computerScore = 0;
let round = 0;

function increaseRound() {
    round += 1;
    //roundsPlayed.innerText = `Round: ${round}`;
    return round;
}

function computerPlay () {
    const computerArray = ['rock', 'paper', 'scissors'];
    const computerSelection = computerArray[Math.floor(Math.random() * computerArray.length)];
    return computerSelection;
} 

function playRound (playerSelection, computerSelection) {
    selections.innerText = `Computer Selection : ${computerSelection}`
    if (playerSelection === computerSelection) {
        console.log("tie")
        result.innerText = "The Round Was A Tie!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        console.log("player")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        console.log("player")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        console.log("player")
    } else {
        computerScore += 1;
        console.log("computer")
    }
    scores.innerText = `Your Score : ${playerScore} || Computer Score : ${computerScore}`
}

function declareWinner(playerScore, computerScore) {
    if (playerScore === 5 || computerScore === 5) {
        playButtons.forEach((button) => {
            button.setAttribute('disabled', '');
            button.classList.add('disabled-button');
        });
        if (playerScore === 5) {
            console.log("Player Wins!");
            winner.innerText = "You Win!"
        }   else {
            console.log("Computer Wins!");
            winner.innerText = "Computer Wins!"
        }
        newGame.style.visibility = 'visible';
    }
}

function playRockPaperScissors() {
    let playerSelection;
    playButtons.forEach((button) => {
        button.addEventListener('click', () => {
        if (button.classList.contains('rock-button')) {
            playerSelection = 'rock';
        } else if (button.classList.contains('paper-button')) {
            playerSelection = 'paper';
        } else {
            playerSelection = 'scissors';
        }
        increaseRound();
        playRound(playerSelection, computerPlay());
        declareWinner(playerScore, computerScore);

        });
    });
    
   

}



playRockPaperScissors();