function getComputerChoice(){
    if (Math.random() <= .33) {
        return "rock";
    } else if (Math.random() >= .33) {
        return "paper";
    } else {
        return "scissor";
    }
} 
console.log(getComputerChoice());