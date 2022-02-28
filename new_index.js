    
// this function takes two strings and evaluates them against one another to find a winner for the round //
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return "tie";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        return "player";
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        return "player";
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        return "player";
    } else {
        return "computer";
    }
}

// this function makes sure that the input from the prompt is a valid selection //
function getValidSelection(possibleSelections) {
    var validSelectionMade = false;
  
    while (validSelectionMade == false) {
      let selection = prompt("\tRock, Paper, Scissors");
      if (possibleSelections.has(selection.toLowerCase())) {
        validSelectionMade = true;
        return selection;
      }
    }
  }
  

  function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }

  // this function is responsible for using the playRound function to attribute score over the course of the game to //
  // decide who the winner is // 
    function playRockPaperScissors(player, computer) {
    var possibleSelections = new Set(["rock", "paper", "scissors"]);
    var playerScore = 0;
    var computerScore = 0;
    var playerSelection;
    var computerSelection;
    var roundsPlayed = 0;

    while (playerScore < (5) && computerScore < (5)) {
        roundsPlayed++;
        console.log("\nRound #%d", roundsPlayed);
        console.log("-------------------------");

        console.log("- %s choose:", player);
        playerSelection = getValidSelection(possibleSelections);
        console.log("- %s Selected %s", player, toTitleCase(playerSelection));

        console.log("- %s choose:", computer);
        if (computer) {
            computerSelection = Array.from(possibleSelections)[Math.floor(Math.random() * possibleSelections.size)];

            console.log("- Computer Selected %s", toTitleCase(computerSelection));
        } else {
            computerSelection = getValidSelection(possibleSelections);
        console.log("- %s Selected: %s", computer, toTitleCase(computerSelection));
        }

        winner = playRound(playerSelection, computerSelection);

        if (winner.toLowerCase() == "player") {
            playerScore++;
            alert("- You Have Won The Round!\n Your Score Is" + " " + playerScore, player);
            console.log(playerScore);
        } else if (winner.toLowerCase() == "computer") {
            computerScore++;
            alert("- Computer Has Won The Round!\n The Computer's Score Is" + " " + computerScore, computer);
            console.log(computerScore);
        } else {
            alert("- The Round Was a Tie!");
        }
    }

        if (playerScore = 5 && (playerScore > computerScore)) {
            alert("- Player Has Won The Game", player);
        } else if (computerScore = 5) {
            alert("- Computer Has Won The Game", computer);
        } else {
            alert("Round Limit Has Been Reached, Please Refresh The Page To Continue!", maxRounds);
        }
    }
playRockPaperScissors("player", "computer")
