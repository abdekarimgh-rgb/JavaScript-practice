var prompt = require("prompt-sync")();
    //Challenge 5 : Calcul de la Puissance:
let base = Number(prompt("entre le base :"));
let exposant = Number(prompt("entrez un nombre :"));
let result = 1;
for(let i = 0 ; i < exposant ; i++){
    result = result * base;
}
console.log(result);