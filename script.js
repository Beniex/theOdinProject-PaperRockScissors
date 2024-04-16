/* FIRST ASSIGNMENT - GAME LOGIC 
1) the computer chooses between paper, rock or scissors  
2) the player types "paper" "rock" or "scissors" into the console 
3) the programmm catches the entry 
4)the program compares it with the computer's chose and decides who won 
 4-1) transform the entry in UPPERCASE not to be case sensitive 
 4-2) convert entry UPPERCASE into numbers and test if the value is acceptable (paper rock or scisors)
 4-3) compare it with the three cases 
5) the console displays the results of the match and waits for the next player's play 

SECOND ASSIGNMENT - UI with DOM manipulation
1) create buttons (paper rock scisors)
2)add an eventlistener which catch the payer choice and play the game 
3) add a div to dispaly results 
4) change console log to DOM methods 
5) display the running score 
6) winner of the game is the first at 5 points 
*/





function getRandomIntInsideAnInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getComputerMove(){
    var computerMove = getRandomIntInsideAnInterval(1,3); 
    return computerMove; 
}
function getPlayerMove (){
    let playerMoveInUpperCase = prompt("Write Paper, Rock or Scisors", "paper").toUpperCase();
return playerMoveInUpperCase; 
}



function transformMoveUpperCaseIntoNumberZerotoThree(moveInUppercase){
    var playerMoveNumber = 0; 
    switch(moveInUppercase) {
        case "PAPER": 
        playerMoveNumber = 1; 
        break; 

        case "ROCK": 
        playerMoveNumber = 2; 
        break; 

        case "SCISORS": 
        playerMoveNumber = 3; 
        break; 
    }
    return playerMoveNumber; 
}

function calculateResultOfTheGame(computerMove, playerMoveInUpperCase){
    var playerMove = transformMoveUpperCaseIntoNumberZerotoThree(playerMoveInUpperCase); 
    let resultMessage =""; 
    if(computerMove == 1){
        if(playerMove == 1){
            resultMessage = "Match Nul"; 
        }          
        if (playerMove == 2){
            resultMessage = "the computer won"; 
        }
        if (playerMove == 3){
            resultMessage = "the computer lose"; 
        }
    }
    if(computerMove == 2){
        if(playerMove == 1){
            resultMessage = "the computer lose"; 
        }          
        if (playerMove == 2){
            resultMessage = "Match nul"; 
        }
        if (playerMove == 3){
            resultMessage = "the computer won"; 
        }
    }
    if(computerMove == 3){
        if(playerMove == 1){
            resultMessage = "the computer won"; 
        }          
        if (playerMove == 2){
            resultMessage = "the computer lose"; 
        }
        if (playerMove == 3){
            resultMessage = "Match nul"; 
        }
    }
    if (playerMove == 0){
        resultMessage = "I did not understand"
    }
    return resultMessage; 
}

while (true){

//let thisComputerMove = getComputerMove(); 

//let thisPlayerMove = getPlayerMove(); 

//let thisResult = calculateResultOfTheGame(getComputerMove(), getPlayerMove()); 
console.log(calculateResultOfTheGame(getComputerMove(), getPlayerMove())); 
   
}