function getComputerChoice(){

    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
    
}

function getWinner(humanChoice, computerChoice){

    if (humanChoice === "paper" && computerChoice === "scissors"){
        informationText.textContent = "You lose! Scissors beats Paper";
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        informationText.textContent = "You lose! Paper beats Rock";
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        informationText.textContent = "You lose! Rock beats Scissors";
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        informationText.textContent = "You win! Paper beats Rock";
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        informationText.textContent = "You win! Scissors beats Paper";
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        informationText.textContent = "You win! Rock beats Scissors";
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
    else if (humanChoice === computerChoice){
        informationText.textContent = "No one wins! Both players picked the same answer";
        console.log("No one wins! Both players picked the same answer");
    }

}

function showChoices(humanChoice, computerChoice){

    switch (humanChoice){
        case 'rock':
            humanChoiceImg.src = "./images/rock.png";
            break;
        
        case 'paper':
            humanChoiceImg.src = "./images/paper.png";
            break;

        case 'scissors':
            humanChoiceImg.src = "./images/scissors.png";
            break;
    }

    switch (computerChoice){
        case 'rock':
            computerChoiceImg.src = "./images/rock.png"
            break;
        
        case 'paper':
            computerChoiceImg.src = "./images/paper.png";
            break;

        case 'scissors':
            computerChoiceImg.src = "./images/scissors.png";
            break;
    }

}

function playRound(){

    let humanChoice = this.id;
    let computerChoice = getComputerChoice();

    getWinner(humanChoice, computerChoice);
    showChoices(humanChoice, computerChoice);

    humanScoreParagraph.textContent = humanScore;
    computerScoreParagraph.textContent = computerScore;

}


let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const informationText = document.querySelector("#message");
const humanScoreParagraph = document.querySelector("#playerScoreText");
const computerScoreParagraph = document.querySelector("#computerScoreText");

const humanChoiceImg = document.querySelector("#humanChoiceImg");
const computerChoiceImg = document.querySelector("#computerChoiceImg");

humanScoreParagraph.textContent = 0;
computerScoreParagraph.textContent = 0;

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);
