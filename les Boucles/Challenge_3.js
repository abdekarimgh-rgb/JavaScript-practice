var prompt = require("prompt-sync")();
    //Challenge 3 : Somme des N Nombres:
let  N = Number(prompt("entrew un nombre :"));
let result = 0;
for(let i = 1 ; i <= N ; i++){
    result = result + i;
}
console.log(" "+result);