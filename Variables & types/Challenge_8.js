var prompt = require("prompt-sync")();
console.log("un programme JavaScript pour trouver la moyenne géométrique de trois nombres saisis par l'utilisateur.");

let a = +prompt("entre la 1er nombre :");
let b = +prompt("entre la 2er nombre :");
let c = +prompt("entre la 3er nombre :");

console.log((a + b + c)**(1/3));