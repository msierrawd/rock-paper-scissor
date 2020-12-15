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


// When player choice buttons are clicked 
// leftChoice changes string value to what they picked 
// leftImage change src to match image of string value
document.getElementById("rockBtn").addEventListener("click", function() {
    leftChoice = "rock";
    document.getElementById("leftImage").src="./images/rockL.png"
  });
  document.getElementById("scissorBtn").addEventListener("click", function() {
    leftChoice = "scissor";
    document.getElementById("leftImage").src="./images/scissorL.png"
  });
  document.getElementById("paperBtn").addEventListener("click", function() {
    leftChoice = "paper";
    document.getElementById("leftImage").src="./images/paperL.png"
  });

console.log(leftChoice)

// Checks to see if there are any winning or tie-ing situations
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