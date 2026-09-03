var prompt = require("prompt-sync")();
console.log("un programme pour trouver le volume d'une sphère.");

const pi = 3.14;
let rayon = prompt("entre le rayon :");
let volume = (3/4) * pi * rayon**3;

console.log(volume);