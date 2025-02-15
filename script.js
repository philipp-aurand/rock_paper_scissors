let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const computerChoice = Math.random();
    if (computerChoice <= .33) {
        return "rock";
    } else if (computerChoice >= .66) {
        return "paper";
    } else {
        return "scissor";
    }
} 
/* console.log("The Computer plays:", getComputerChoice()); */


function getHumanChoice() {
    const humanChoice = prompt("Please enter rock, paper, scissor!");
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissor") {
        return humanChoice;
    } else {
        alert("Invalid Choice! Enter rock, paper or scissor!");
        return getHumanChoice();
    }
}
/* console.log("You played:", getComputerChoice()); */


function playRound(humanChoice, computerChoice) {
      
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissor" ||
               humanChoice === "paper" && computerChoice === "rock" ||
               humanChoice === "scissor" && computerChoice === "paper")  {
               humanScore++; 
               console.log("You win this round! Your socore is:", humanScore);
    } else {
        computerScore++ ;
        console.log("You loose this round! The compouter score is:", computerScore);
    }
}
/*const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection); */


function playGame() {
    for(let i = 1; i <= 5; i ++) {
       const humanSelection = getHumanChoice();
       const computerSelection = getComputerChoice();
       console.log("You played: ", humanSelection); 
       console.log("Computer played:", computerSelection);
       playRound(humanSelection, computerSelection);
     
    } 
    
    console.log(`The final score of this rps series is - You: ${humanScore}, Computer: ${computerScore},`);
    if (humanScore > computerScore) {
        console.log("You win the best of 5 series!")
    } else if (humanScore < computerScore) {
        console.log("You Loose the series:(")
    } else {
        console.log("It's a tie!")
    }
}
playGame();
    