let raceNumber = Math.floor(Math.random() * 1000);
let registered_early = false;
let runner_age = 18;
if(registered_early === true && runner_age > 18){
raceNumber += 1000;
  console.log("They will start at 9:30 am.");
  console.log("Your race-number is "+raceNumber);
}else if(registered_early === false && runner_age > 18){
  console.log("They will start at 11:00 am.");
  console.log("Your race-number is "+raceNumber);
}else if(runner_age < 18){
  console.log("They will start at 12:30 pm.");
  console.log("Your race-number is "+raceNumber);
}else{
  console.log("Please come on registration desk!")
}