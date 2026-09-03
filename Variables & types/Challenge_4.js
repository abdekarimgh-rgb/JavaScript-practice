var prompt = require('prompt-sync')();
console.log("programme qui demande la vitesse en kilomètres par heure (km/h) et la transforme en mètres par seconde (m/s). ");

let m ;
let km = prompt("entre la vitesse (km/h) :");

console.log("m/s =", m = km * 0.27778);