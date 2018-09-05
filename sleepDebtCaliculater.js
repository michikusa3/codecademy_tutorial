const getSleepHours = (day,hour) =>{
  switch(day.toLowerCase()){
    case "monday":
    return(hour);
    break;
      
    case "tuesday":
    return(hour);
    break;
      
    case "wednesday":
    return(hour);
    break;
      
    case "thirsday":
    return(hour);
    break;
      
    case "friday":
    return(hour);
    break;
    
    case "saturday":
    return(hour);
    break;
    
    case 'sunday':
    return(hour);
    break;
    
  }
};
	let day_hour1 = getSleepHours('monday',6);
  let day_hour2 = getSleepHours('tuesday',5);
  let day_hour3 = getSleepHours('wednesday',5);
  let day_hour4 = getSleepHours('thirsday',5);
  let day_hour5 = getSleepHours('friday',10);
  let day_hour6 = getSleepHours('saturday',10);
  let day_hour7 = getSleepHours('sunday',7);
  

const getActualSleepHours = () => {
let sum =(day_hour1 + day_hour2 + day_hour3 + day_hour4 + day_hour5 + day_hour6 + day_hour7);
  console.log(sum);
 };

const getIdealSleepHours = (idealHours) =>{
  console.log(idealHours * 7); 
};
const calculatesleepDebt = () =>{
 const actualSleepHours = getActualSleepHours();
 const idealSleepHours = getIdealSleepHours(8);
  if(actualSleepHours === idealSleepHours ){
    console.log('You get the perfect sleep.')
  }else if(actualSleepHours > idealSleepHours ){
		console.log('You get more sleep than needed.')
  }else{
    console.log('You should get some rest.')
  }
};
calculatesleepDebt();

