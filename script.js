// Accesing event listners
 const rockEl = document.getElementById('rock');
 const paperEl = document.getElementById('paper');
 const scissorEl = document.getElementById('scissor');

//Array of possible selections for Computer
const selection = ["rock", "paper", "scissor"];

// declaring selection variables
var computerSelection = "none"; 

 // player selection function
 rockEl.addEventListener('click', () =>{
    var playerSelection = 'rock';
    playRound(playerSelection, computerSelection);

  })
  paperEl.addEventListener('click', () =>{
   var playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
  })
  scissorEl.addEventListener('click', () =>{
    var playerSelection = 'scissor';
     playRound(playerSelection, computerSelection);
  })

 
  


 // Game logic Function
function playRound(playerSelection, computerSelection){

   
//computer choice function
function getComputerChoice(){
    let x = Math.floor(Math.random() * 3);
    return selection[x];
 }
 
//player & computer Selection 

computerSelection = getComputerChoice();

  if(computerSelection === "rock"){
    if(playerSelection === "rock"){
        console.log("Match Draw! Identical Selection")
    }
    else if(playerSelection === "paper"){
        console.log("Yow win! paper beats rock")
    
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
        
    }
  }

}

