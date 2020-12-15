// 
// 
// SINGLEPLAYER JS CODE 
// 
// 



// declaring global variables
let scoreToWin = 3; 
let leftScore = 0; 
let rightScore = 0; 
let leftChoice = "";
let rightChoice = "";



// Check to see if any win game conditions are posssible 
function checkMatchScore() {
    if(leftScore === scoreToWin){
        document.getElementById("winnerAnnounced").innerHTML="Player1 Wins!"
        makeRematchBtn();


        // disables player2s action buttons after winner is displayed
        document.getElementById("rockRBtn").disabled = true;
        document.getElementById("paperRBtn").disabled = true;
        document.getElementById("scissorRBtn").disabled = true;


        // disables player1s action buttons after winner is displayed
        document.getElementById("rockLBtn").disabled = true;
        document.getElementById("paperLBtn").disabled = true;
        document.getElementById("scissorLBtn").disabled = true;
    }else if(rightScore === scoreToWin){
        document.getElementById("winnerAnnounced").innerHTML="Player2 Wins!"
        makeRematchBtn();
        

        // disables player2s action buttons after winner is displayed
        document.getElementById("rockRBtn").disabled = true;
        document.getElementById("paperRBtn").disabled = true;
        document.getElementById("scissorRBtn").disabled = true;


        // disables player1s action buttons after winner is displayed
        document.getElementById("rockLBtn").disabled = true;
        document.getElementById("paperLBtn").disabled = true;
        document.getElementById("scissorLBtn").disabled = true;
    }
}


function changeScoreLimit() {
    newScore = document.getElementById("newScoreLimit").value
    scoreToWin = newScore
}



// Deletes play button and make rematch button
function makeRematchBtn(){
    // gets rid of play button
    let playBtn = document.getElementById("play");
    playBtn.remove();

    // makes rematch button and appends it to checkResult div
    let rematchBtn = document.createElement("BUTTON");
    rematchBtn.innerHTML = "rematch"
    rematchBtn.setAttribute("id", "rematchBtn")
    document.getElementById("checkResult").appendChild(rematchBtn);


    document.getElementById("rematchBtn").addEventListener("click", function() {
        location.reload();
      });
}

function changePlayer1ImageBasedOnString(){
    if (leftChoice === "rock"){
        document.getElementById("leftImage").src="./images/rockL.png"
    }else if(leftChoice === "paper"){
        document.getElementById("leftImage").src="./images/paperL.png"
    }else if(leftChoice === "scissor"){
        document.getElementById("leftImage").src="./images/scissorL.png"
    }
}

function changePlayer2ImageBasedOnString(){
    if(rightChoice === "rock"){
        document.getElementById("rightImage").src="./images/rockR.png"
    }else if (rightChoice === "paper"){
        document.getElementById("rightImage").src="./images/paperR.png"
    }else if (rightChoice === "scissor"){
        document.getElementById("rightImage").src="./images/scissorR.png"
    }
}

// Checks to see if there are any winning or tie-ing situations
// Add code that stops score addition if winscore is reached
function gameRules () {
    if (leftChoice === rightChoice) {
        console.log("TIE!");
    }else if(leftChoice === "rock" && rightChoice === "paper" && leftScore !== scoreToWin && rightScore !== scoreToWin) {
        rightScore+= 1;
        document.getElementById("rightScoreDisplay").innerHTML ++ ;
    }else if (leftChoice === "rock" && rightChoice === "scissor" && leftScore !== scoreToWin && rightScore !== scoreToWin) {
        leftScore+= 1;
        document.getElementById("leftScoreDisplay").innerHTML ++ ;
    }else if (leftChoice === "paper" && rightChoice === "rock" && leftScore !== scoreToWin && rightScore !== scoreToWin) {
        leftScore+= 1;
        document.getElementById("leftScoreDisplay").innerHTML ++ ;
    }else if (leftChoice === "paper" && rightChoice === "scissor" && leftScore !== scoreToWin && rightScore !== scoreToWin){
        rightScore+= 1;
        document.getElementById("rightScoreDisplay").innerHTML ++ ;
    }else if (leftChoice === "scissor" && rightChoice === "rock" && leftScore !== scoreToWin && rightScore !== scoreToWin) {
        rightScore+=1;
        document.getElementById("rightScoreDisplay").innerHTML ++ ;
    }else if (leftChoice === "scissor" && rightChoice === "paper" && leftScore !== scoreToWin && rightScore !== scoreToWin) {
        leftScore+= 1;
        document.getElementById("leftScoreDisplay").innerHTML ++ ;
    }
}



// When player choice buttons are clicked 
// leftChoice changes string value to what they picked 
// leftImage changes src to match image of string value
document.getElementById("rockLBtn").addEventListener("click", function() {
    leftChoice = "rock";
    document.getElementById("leftImage").src="./images/noChoiceMadeYet.png"
  });
  document.getElementById("scissorLBtn").addEventListener("click", function() {
    leftChoice = "scissor";
    document.getElementById("leftImage").src="./images/noChoiceMadeYet.png"
  });
  document.getElementById("paperLBtn").addEventListener("click", function() {
    leftChoice = "paper";
    document.getElementById("leftImage").src="./images/noChoiceMadeYet.png"

  });



// When player choice buttons are clicked 
// rightChoice changes string value to what they picked 
// rightImage changes src to match image of string value
  document.getElementById("rockRBtn").addEventListener("click", function() {
    rightChoice = "rock";
    document.getElementById("rightImage").src="./images/noChoiceMadeYet.png"
  });
  document.getElementById("scissorRBtn").addEventListener("click", function() {
    rightChoice = "scissor";
    document.getElementById("rightImage").src="./images/noChoiceMadeYet.png"
  });
  document.getElementById("paperRBtn").addEventListener("click", function() {
    rightChoice = "paper";
    document.getElementById("rightImage").src="./images/noChoiceMadeYet.png"
  });


  document.getElementById("play").addEventListener("click", function() {
    changePlayer1ImageBasedOnString();
    changePlayer2ImageBasedOnString();
    gameRules();
    checkMatchScore();
    leftChoice = "";
    rightChoice = ""

  });






// 
// 
// MULTIPLAYER JS CODE 
// 
// 
