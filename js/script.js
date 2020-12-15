let scoreToWin = 3; 
let leftScore = 3; 
let rightScore = 0; 
let leftChoice = " ";
let rightChoice = " ";

function checkMatchScore() {
    if(leftScore === scoreToWin) {
        console.log("Left side won!");
    }else if (rightScore === scoreToWin) {
        console.log("Right side won!");
    }
}

function gameRules () {
    if (leftChoice === rightChoice) {
        console.log("TIE!");
    }else if(leftChoice === "rock" && rightChoice === "paper") {
        rightScore++
    }else if (leftChoice === "rock" && rightChoice === "scissor") {
        leftScore++
    }else if (leftChoice === "paper" && rightChoice === "rock") {
        leftChoice++ 
    }else if (leftChoice === "paper" && rightChoice === "scissor"){
        rightChoice++
    }else if (leftChoice === "scissor" && rightChoice === "rock") {
        rightChoice++
    }else if (leftChoice === "scissor" && rightChoice === "paper") {
        leftChoice++ 
    }
}