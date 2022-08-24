/*getComputerChoice generates and returns random choice selection by computer*/
function getComputerChoice() {
    const choice = ['rock','paper','scissor'];
    return choice[Math.floor(Math.random()*3)];
}
const computerSelection = getComputerChoice();
console.log(computerSelection);
const playerSelection = prompt("Enter Player selection rock, paper od scissor");
console.log(playRound(playerSelection.toLowerCase(),computerSelection));

/*playRound compares player and computer selection to compute win, tie and looser */
function playRound(playerSelection,computerSelection) {
    if(computerSelection=='rock'& playerSelection=='paper' || computerSelection=='paper'& playerSelection=='scissor' || computerSelection=='scissor'& playerSelection=='rock') {
        return `You won ${playerSelection} beats ${computerSelection}`;
        
    }
    else if(computerSelection === playerSelection) {
        return `Its a Tie between ${playerSelection} and ${computerSelection}`;
    }
    else {
        return `You Lost ${computerSelection} beats ${playerSelection}`;
    }
}