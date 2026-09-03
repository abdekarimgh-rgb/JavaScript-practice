var prompt = require("prompt-sync")();
    //Challenge 4 : Affichage des N Premiers Nombres Impairs:
let N = Number(prompt("entrez un nombre"));
let result = 1;
let i = 1;
while(i <= N){
    console.log(result);
    result = result + 2;
    i++
}