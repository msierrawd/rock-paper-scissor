let scoreToWin = 3; 
let leftScore = 3; 
let rightScore = 0; 

function checkCurrentScore() {
    if(leftScore === scoreToWin) {
        console.log("Left side won!")
    }else if (rightScore === scoreToWin) {
        console.log("Righ side won!")
    }
}

function gameRules () {
    
}