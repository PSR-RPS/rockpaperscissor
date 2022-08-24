function getComputerChoice() {
    const choice = ['rock','paper','scissor'];
    return choice[Math.floor(Math.random()*3)];
}
const computerSelection = getComputerChoice();
console.log(computerSelection);