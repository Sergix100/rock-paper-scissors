function getComputerChoice(){

    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];

}

function getRoundWinner(humanChoice, computerChoice){

    if (humanChoice === "paper" && computerChoice === "scissors"){
        informationText.textContent = "You lose! Scissors beats Paper";
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        informationText.textContent = "You lose! Paper beats Rock";
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        informationText.textContent = "You lose! Rock beats Scissors";
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        informationText.textContent = "You win! Paper beats Rock";
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        informationText.textContent = "You win! Scissors beats Paper";
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        informationText.textContent = "You win! Rock beats Scissors";
        humanScore++;
    }
    else if (humanChoice === computerChoice){
        informationText.textContent = "No one wins! Both players picked the same answer";
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

function gameOver(humanScore, computerScore){

    modal.showModal();
    if(humanScore === 5){
        modalText.textContent = "You won! Congratulations!"
    }
    else{
        modalText.textContent = "Computer won! Better luck next time!"
    }

}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    humanScoreParagraph.textContent = humanScore;
    computerScoreParagraph.textContent = computerScore;
    informationText.textContent = '';
    computerChoiceImg.src = '';
    humanChoiceImg.src = '';
    modal.close();

}

function playRound(){

    let humanChoice = this.id;
    let computerChoice = getComputerChoice();

    getRoundWinner(humanChoice, computerChoice);
    showChoices(humanChoice, computerChoice);

    humanScoreParagraph.textContent = humanScore;
    computerScoreParagraph.textContent = computerScore;

    if(humanScore === 5 || computerScore === 5){
        gameOver(humanScore, computerScore);
    }
    
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

const modal = document.querySelector("#modal");
const btnModal = document.querySelector("#resetGame");
const modalText = document.querySelector("#modalText");

humanScoreParagraph.textContent = 0;
computerScoreParagraph.textContent = 0;

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);
btnModal.addEventListener("click", resetGame);
