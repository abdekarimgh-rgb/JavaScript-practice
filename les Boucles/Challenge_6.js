var prompt = require("prompt-sync")();
    //Challenge 6 : Affichage des N Premiers Nombres Pair:
let N = Number(prompt("entrez un nombre :"));
let result = 0;
for(let i = 0; i < N ; i++){
    result = result + 2;
    console.log(" "+result);
}