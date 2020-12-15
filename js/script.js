let scoreToWin = 1; 
let leftScore = 0; 
let rightScore = 0; 
let leftChoice = "";
let rightChoice = "";

function checkMatchScore() {
    if(leftScore === scoreToWin) {
        console.log("Left side won!");
    }else if (rightScore === scoreToWin) {
        console.log("Right side won!");
    }
}


function submitScoreChange(int) {
    scoreToWin = int;
}



// When player choice buttons are clicked 
// leftChoice changes string value to what they picked 
// leftImage change src to match image of string value
document.getElementById("rockLBtn").addEventListener("click", function() {
    leftChoice = "rock";
    document.getElementById("leftImage").src="./images/rockL.png"
  });
  document.getElementById("scissorLBtn").addEventListener("click", function() {
    leftChoice = "scissor";
    document.getElementById("leftImage").src="./images/scissorL.png"
  });
  document.getElementById("paperLBtn").addEventListener("click", function() {
    leftChoice = "paper";
    document.getElementById("leftImage").src="./images/paperL.png"
  });


  document.getElementById("rockRBtn").addEventListener("click", function() {
    rightChoice = "rock";
    document.getElementById("rightImage").src="./images/rockR.png"
  });
  document.getElementById("scissorRBtn").addEventListener("click", function() {
    rightChoice = "scissor";
    document.getElementById("rightImage").src="./images/scissorR.png"
  });
  document.getElementById("paperRBtn").addEventListener("click", function() {
    rightChoice = "paper";
    document.getElementById("rightImage").src="./images/paperR.png"
  });

// Checks to see if there are any winning or tie-ing situations
function gameRules () {
    if (leftChoice === rightChoice) {
        console.log("TIE!");
    }else if(leftChoice === "rock" && rightChoice === "paper") {
        rightScore+= 1;
        document.getElementById("rightScoreDisplay").innerHTML ++ ;
    }else if (leftChoice === "rock" && rightChoice === "scissor") {
        leftScore+= 1;
        document.getElementById("leftScoreDisplay").innerHTML ++ ;
    }else if (leftChoice === "paper" && rightChoice === "rock") {
        leftChoice+= 1;
        document.getElementById("leftScoreDisplay").innerHTML ++ ;
    }else if (leftChoice === "paper" && rightChoice === "scissor"){
        rightChoice+= 1;
        document.getElementById("rightScoreDisplay").innerHTML ++ ;
    }else if (leftChoice === "scissor" && rightChoice === "rock") {
        rightChoice+=1;
        document.getElementById("rightScoreDisplay").innerHTML ++ ;
    }else if (leftChoice === "scissor" && rightChoice === "paper") {
        leftChoice+= 1;
        document.getElementById("leftScoreDisplay").innerHTML ++ ;
    }
}
gameRules();