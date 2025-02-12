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
    const humanChoice = prompt("Please enter rock, papper, scissor!");
    if (humanChoice === "rock" || "paper" || "scissor") {
        return getHumanChoice;
    } else (
        alert("Invalid Choice! Enter rock, paper or scissor!")
    )
}
console.log(getComputerChoice());