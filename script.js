let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const computerChoice = Math.random();
    if (computerChoice <= .33) {
        return "rock";
    } else if (computerChoice >= .33) {
        return "paper";
    } else {
        return "scissor";
    }
} 
console.log(getComputerChoice());


function getHumanChoice() {
    const humanChoice = prompt("Please enter rock, paper, scissor!");
    if (humanChoice === "rock" || "paper" || "scissor") {
        return humanChoice;
    } else (
        alert("Invalid Choice! Enter rock, paper or scissor!")
    )
}
console.log(getComputerChoice());


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissor" ||
               humanChoice === "paper" && computerChoice === "rock" ||
               humanChoice === "scissor" && computerChoice === "paper")  {
               humanScore++; 
               console.log("You win!", humanScore);
    } else {
        computerScore++ ;
        console.log("You loose!", computerScore);
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function playGame() {
    for(let i = 1; i <= 5; i ++) {
       const humanSelection = getHumanChoice();
       const computerSelection = getComputerChoice();
       playRound(humanSelection, computerSelection);
      
    } 
    if (humanScore > computerScore) {
        console.log("You Win!")
    } else {
        console.log("You Loose:(")
    }
}
playGame();
    