function getComputerChoice(){

    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(){

    let humanChoice = prompt("Pick between rock, paper or scissors");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
        return humanChoice;
    }
    else{
            let isAChoice = false;
            while (isAChoice == false){
                console.log("You didn't select any of the options, please pick between rock, paper or scissors");
                humanChoice = prompt("Pick between rock, paper or scissors");
                humanChoice = humanChoice.toLowerCase();
                if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
                    isAChoice = true;
                    return humanChoice;
                }    

            }

    }
}

function playRound(humanChoice, computerChoice){

    console.log("Your choice is " + humanChoice);
    console.log("Computer's choice is " + computerChoice);

    if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if (humanChoice === computerChoice){
        console.log("No one wins! Both players picked the same answer");
    }

}

function playGame(){

    
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
alert ("Human Score = " + humanScore);
alert ("Computer Score = "+ computerScore);
