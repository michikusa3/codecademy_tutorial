//this is temperture in kelvin
let kelvin = 0;
//celcius is kelvin minus 273	
let celcius = kelvin - 273; 
let fahrenheit = celcius*(9/5) +32;
fahrenheit = Math.floor(fahrenheit);
console.log("The temperature is "+fahrenheit+" degrees Fahrenheit.");

let newton = celcius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Fahrenheit.`);