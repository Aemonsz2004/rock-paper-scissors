


// Variables
var humanScore = 0;
var computerScore = 0;



// Functions
function getComputerChoice() {

    var randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return "scissors";
    }
}


function getHumanChoice(){
        try { var humanNumber = prompt("Please enter your choice: rock, paper or scissors");
        return humanNumber.toLowerCase();
    } catch (error) {
            console.log("Please enter a valid choice");
        }
    }


// function to play a round of the game
function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors.");
        return humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.");
        return humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("you win! Scissors beats paper.");
        return humanScore++
    } else if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }  else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        return computerScore++;
    }
};

/////////////////////////////////////
// loop to play the game for 5 rounds
for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    console.log("Round " + i);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

