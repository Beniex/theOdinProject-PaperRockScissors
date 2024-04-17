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
5,1)create two scores 
5,2) store the running in each one
5,3) first at 5 wins, display the name of the winner in new div 
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

        case "SCISSORS": 
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


const paper = document.querySelector("#paper"); 
const rock = document.querySelector("#rock"); 
const scissors = document.querySelector("#scissors"); 


let playerScore = 0; 
let computerScore = 0; 

const playerScoreDisplay = document.querySelector("#playerScore"); 
const computerScoreDisplay = document.querySelector("#computerScore"); 
const winnerDisplay = document.querySelector("#winner"); 

paper.addEventListener("click", function(){
    var resultOfTheGame = calculateResultOfTheGame(getComputerMove(), "PAPER");
    winnerDisplay.textContent =""; 
    upDateScores(resultOfTheGame); 
    detectWinner();
});

rock.addEventListener("click", function(){
    var resultOfTheGame = calculateResultOfTheGame(getComputerMove(), "ROCK");
    winnerDisplay.textContent =""; 
    upDateScores(resultOfTheGame);  
    detectWinner();
})

scissors.addEventListener("click", function(){
    var resultOfTheGame = calculateResultOfTheGame(getComputerMove(), "SCISSORS");
    winnerDisplay.textContent =""; 
    upDateScores(resultOfTheGame); 
    detectWinner(); 
});

function upDateScores(string){
    results.textContent = string; 
    switch(string){
        case "the computer lose": playerScore++; 
        break; 
        case "the computer won": computerScore++;  
        break; 
    }
    playerScoreDisplay.textContent = playerScore; 
    computerScoreDisplay.textContent = computerScore;

}

function detectWinner(){
    if (playerScore == 5){
        winnerDisplay.textContent = "YOU WIN"; 
        playerScore = 0; 
        computerScore = 0; 
    }
    if(computerScore == 5){
        winnerDisplay.textContent = "COMPUTER WINS"; 
        playerScore = 0; 
        computerScore = 0; 
    }
}

//while (true){

//let thisComputerMove = getComputerMove(); 

//let thisPlayerMove = getPlayerMove(); 

//let thisResult = calculateResultOfTheGame(getComputerMove(), getPlayerMove()); 
//console.log(calculateResultOfTheGame(getComputerMove(), getPlayerMove())); 
   
//}
