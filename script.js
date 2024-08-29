function getComputerChoice(){

    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];

}

function getRoundWinner(humanChoice, computerChoice){

    winRound.pause();
    winRound.currentTime = 0;
    loseRound.pause();
    loseRound.currentTime = 0;
    tieRound.pause();
    tieRound.currentTime = 0;

    if (humanChoice === "paper" && computerChoice === "scissors"){
        informationText.textContent = "You lose! Scissors beats Paper";
        computerScore++;
        changeParagraphRed.classList.add("changeComputerScoreText");
        loseRound.play();
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        informationText.textContent = "You lose! Paper beats Rock";
        computerScore++;
        changeParagraphRed.classList.add("changeComputerScoreText");
        loseRound.play();
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        informationText.textContent = "You lose! Rock beats Scissors";
        computerScore++;
        changeParagraphRed.classList.add("changeComputerScoreText");
        loseRound.play();
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        informationText.textContent = "You win! Paper beats Rock";
        humanScore++;
        changeParagraphGreen.classList.add("changePlayerScoreText");
        winRound.play();
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        informationText.textContent = "You win! Scissors beats Paper";
        humanScore++;
        changeParagraphGreen.classList.add("changePlayerScoreText");
        winRound.play();
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        informationText.textContent = "You win! Rock beats Scissors";
        humanScore++;
        changeParagraphGreen.classList.add("changePlayerScoreText");
        winRound.play();
    }
    else if (humanChoice === computerChoice){
        informationText.textContent = "No one wins! Both players picked the same answer";
        tieScore++;
        changeParagraphYellow.classList.add("changeTieScoreText");
        tieRound.play();
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

    winRound.pause();
    winRound.currentTime = 0;
    loseRound.pause();
    loseRound.currentTime = 0;

    modal.showModal();
    if(humanScore === 5){
        victorySound.volume = 0.5;
        victorySound.play();
        modalText.textContent = "You won! Congratulations!"
    }
    else{
        defeatSound.volume = 0.5;
        defeatSound.play();
        modalText.textContent = "Computer won! Better luck next time!"
    }

}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    tieScore = 0;
    humanScoreParagraph.textContent = humanScore;
    computerScoreParagraph.textContent = computerScore;
    tieScoreParagraph.textContent = tieScore;
    informationText.textContent = '';
    computerChoiceImg.src = '';
    humanChoiceImg.src = '';
    victorySound.pause();
    victorySound.currentTime = 0;
    defeatSound.pause();
    defeatSound.currentTime = 0;
    modal.close();

}

function resetColors(){
    changeParagraphGreen.classList.remove("changePlayerScoreText");
    changeParagraphRed.classList.remove("changeComputerScoreText");
    changeParagraphYellow.classList.remove("changeTieScoreText");
}   

function playRound(){

    let humanChoice = this.id;
    let computerChoice = getComputerChoice();

    resetColors();

    getRoundWinner(humanChoice, computerChoice);
    showChoices(humanChoice, computerChoice);



    humanScoreParagraph.textContent = humanScore;
    computerScoreParagraph.textContent = computerScore;
    tieScoreParagraph.textContent = tieScore;


    if(humanScore === 5 || computerScore === 5){
        gameOver(humanScore, computerScore);
    }
    
}


let humanScore = 0;
let computerScore = 0;
let tieScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const informationText = document.querySelector("#message");
const humanScoreParagraph = document.querySelector("#playerScoreText");
const computerScoreParagraph = document.querySelector("#computerScoreText");
const tieScoreParagraph = document.querySelector("#tieScoreText");

const changeParagraphGreen = document.querySelector("#playerScore p");
const changeParagraphYellow = document.querySelector("#tieScore p");
const changeParagraphRed = document.querySelector("#computerScore p");


const humanChoiceImg = document.querySelector("#humanChoiceImg");
const computerChoiceImg = document.querySelector("#computerChoiceImg");

const modal = document.querySelector("#modal");
const btnModal = document.querySelector("#resetGame");
const modalText = document.querySelector("#modalText");

const victorySound = new Audio("./sounds/Victory.mp3");
const defeatSound = new Audio("./sounds/Defeat.mp3");
const winRound = new Audio("./sounds/winRound.mp3");
const loseRound = new Audio("./sounds/loseRound.mp3");
const tieRound = new Audio("./sounds/tieRound.mp3");

humanScoreParagraph.textContent = 0;
computerScoreParagraph.textContent = 0;
tieScoreParagraph.textContent = 0;


rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

btnModal.addEventListener("click", resetGame);



