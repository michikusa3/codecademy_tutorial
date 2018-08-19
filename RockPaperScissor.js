const getUserChoice = userInput =>{
      userInput = userInput.toLowerCase()
			if(userInput === "rock" || userInput ===  "paper"|| userInput === "scissors" ||userInput === "bomb"){
 return userInput;       
      }else{
	console.log("Please choice your hand into rock , scissors or paper .")
   }};

const getComputerChoice = () =>{
  rundomNumber = Math.floor(Math.random() * 3);
  switch(rundomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'scissors';
      break;
    case 2:
      return 'paper'
      break;
  }
};

function determineWinner(userChoice,computerChoice){
  if(userChoice === "bomb"){
      return 'user win';
  }else if(computerChoice === userChoice){
    return 'The game was tie';
  }else if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
	return 'user lose' ;
    }else if(computerChoice === 'scissors'){
	return 'user win';
    }
  }else if(userChoice === 'scissors'){
    if(computerChoice === 'paper'){
	return 'user win';
    }else if(computerChoice === 'rock'){
	return 'user lose';
    }
}else if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
	return 'user win' ;
    }else if(computerChoice === 'scissors'){
	return 'user lose';
    }
}
}
  
const playGame = () =>{
  let userChoice = getUserChoice('bomb'); 
  let computerChoice = getComputerChoice();
  
  console.log(`You threw :${userChoice}`);
  console.log(`Computer threw :${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
}
  playGame();