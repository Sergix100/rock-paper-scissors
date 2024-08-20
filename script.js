function getComputerChoice(){

    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice(){

    let choice = prompt("Pick between rock, paper or scissors");
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        console.log("Your choice is " + choice);
        return choice;
    }
    else{
            let isAChoice = false;
            while (isAChoice == false){
                console.log("You didn't select any of the options, please pick between rock, paper or scissors");
                choice = prompt("Pick between rock, paper or scissors");
                choice = choice.toLowerCase();
                if (choice === "rock" || choice === "paper" || choice === "scissors"){
                    isAChoice = true;
                    console.log("Your choice is " + choice);
                    return choice;
                }    

            }

    }
}

getHumanChoice();
