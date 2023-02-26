// Accesing event listners
 const rockEl = document.getElementById('rock');
 const paperEl = document.getElementById('paper');
 const scissorEl = document.getElementById('scissor');
 const resultEl = document.getElementById('result');
 const scoreEl = document.getElementById('score');
 const pcScoreEl = document.getElementById('pcscore');

//Array of possible selections for Computer
const selection = ["rock", "paper", "scissor"];

// declaring selection variables
var computerSelection = "none"; 
var pcWin = 0;
var playerWin = 0;


 // player selection function
 rockEl.addEventListener('click', () =>{
    var  playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    console.log('clicked');

  })
  paperEl.addEventListener('click', () =>{
    var playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    console.log('clicked');
  })
  scissorEl.addEventListener('click', () =>{
     var playerSelection = 'scissor';
     playRound(playerSelection, computerSelection);
     console.log('clicked');
  })

 
  


 // Game logic Function
function playRound(playerSelection, computerSelection){

//computer choice function
function getComputerChoice(){
    var x = Math.floor(Math.random() * 3);
    return selection[x];
 }


//player & computer Selection 

computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playerSelection);

  if(computerSelection === "rock"){
    if(playerSelection === "rock"){
        resultEl.textContent = "Match Draw! Identical Selection";
    }
    else if(playerSelection === "paper"){
        resultEl.textContent = "Yow win! paper beats rock";
        playerWin++;
        scoreEl.textContent = `Your Score: ${playerWin}`;
        
    
    }
    else if(playerSelection === "scissor"){
        resultEl.textContent = "You Lose! rock beats scissor";
        pcWin++;
        pcScoreEl.textContent = `Pc Score: ${pcWin}`;
    }
  }

  else if(computerSelection === "paper"){
    if(playerSelection === "rock"){
        resultEl.textContent = "You Lose! paper beats rock";
        pcWin++;
        pcScoreEl.textContent = `Pc Score: ${pcWin}`;
    }
    else if(playerSelection === "paper"){
        resultEl.textContent = "Match Draw! Identical Selection";
    }
    else if(playerSelection === "scissor"){
        resultEl.textContent = "You Win! scissor beats paper";
        playerWin++;
        scoreEl.textContent = `Your Score: ${playerWin}`;
       
    }
  }

  else if(computerSelection === "scissor"){
    if(playerSelection === "rock"){
        resultEl.textContent = "You Lose! paper beats rock";
        pcWin++;
        pcScoreEl.textContent = `Pc Score: ${pcWin}`;
    }
    else if(playerSelection === "paper"){
        resultEl.textContent = "Match Draw! Identical Selection";
    }
    else if(playerSelection === "scissor"){
        resultEl.textContent = "You Win! scissor beats paper";
        playerWin++;
        scoreEl.textContent = `Your Score: ${playerWin}`;
        
    }
  }

}

