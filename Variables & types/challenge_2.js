var prompt = require('prompt-sync')();

console.log("programme qui demande la température en Celsius et la transforme en Kelvin.");

let k = 0; 
let c = prompt("etre la température en Celsius :");

console.log("Kelvin = ", k = c + 273.15);