//Array of possible selections for Computer
 const selection = ["rock", "paper", "scissor"];

 //User Input for number of rounds
const n = parseInt(prompt("How many Rounds you wanna Play?"))

// declaring selection variables
var playerSelection = "none";
var computerSelection = "none";

 //computer choice function
 function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
    return selection[x];
 }

 // Storing number of wins in this variable
 let won = 0;

 // Game logic Function
function playRound(playerSelection, computerSelection){


//player & computer Selection 

playerSelection = prompt("Rock, Paper or Scissor").toLowerCase();

computerSelection = getComputerChoice();

  if(computerSelection === "rock"){
    if(playerSelection === "rock"){
        console.log("Match Draw! Identical Selection")
    }
    else if(playerSelection === "paper"){
        console.log("Yow win! paper beats rock")
        won += 1;
    }
    else if(playerSelection === "scissor"){
        console.log("You Lose! rock beats scissor");
    }
  }

  else if(computerSelection === "paper"){
    if(playerSelection === "rock"){
        console.log("You Lose! paper beats rock")
    }
    else if(playerSelection === "paper"){
        console.log("Match Draw! Identical Selection")
    }
    else if(playerSelection === "scissor"){
        console.log("You Win! scissor beats paper");
        won+=1;
    }
  }

  else if(computerSelection === "paper"){
    if(playerSelection === "rock"){
        console.log("You Lose! paper beats rock")
    }
    else if(playerSelection === "paper"){
        console.log("Match Draw! Identical Selection")
    }
    else if(playerSelection === "scissor"){
        console.log("You Win! scissor beats paper");
        won+=1;
    }
  }

}

//function to fetch number of wins and to play game n number of rounds!!

function game(){
    for(let i = 0; i<n; i++){
       playRound(playerSelection, computerSelection);
    }
    return console.log(`you won ${won} matches out of ${n}`)
}

game();