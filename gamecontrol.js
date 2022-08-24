


let computerScore=0;
let playerScore=0;
game();

/*getComputerChoice generates and returns random choice selection by computer*/
function getComputerChoice() {
    const choice = ['rock','paper','scissor'];
    return choice[Math.floor(Math.random()*3)];
}
/*playRound compares player and computer selection to compute win, tie and looser */
function playRound(playerSelection,computerSelection) {
    
    if(computerSelection=='rock'& playerSelection=='paper' || computerSelection=='paper'& playerSelection=='scissor' || computerSelection=='scissor'& playerSelection=='rock') {
        console.log(`This round, You won ${playerSelection} beats ${computerSelection}`);
        ++playerScore;
    }
    else if(computerSelection === playerSelection) {
        console.log(`This round, Its a Tie between ${playerSelection} and ${computerSelection}`);
    }
    else {
        console.log(`This round, You Lost ${computerSelection} beats ${playerSelection}`);
        ++computerScore;
    }
}

/*game to run five rounds of game and to compute score and winner at end of 5th round */
function game() {
    

    for(i=0;i<5;i++) {
        const computerSelection = getComputerChoice();
        //console.log(computerSelection);
        const playerSelection = prompt("Enter Player selection rock, paper or scissor");
        playRound(playerSelection.toLowerCase(),computerSelection);

    }
    if(playerScore>computerScore) {
        console.log(`Player won with score ${playerScore} vs computerScore ${computerScore}`);
    }
    else if(playerScore<computerScore) {
        console.log(`Player lost with score ${playerScore} vs computerScore ${computerScore}`);
    }
    else {
        console.log(`It's a tie player score ${playerScore} vs computerScore ${computerScore}`);

    }
}

