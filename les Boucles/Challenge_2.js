var prompt = require("prompt-sync")();
    //Challenge 2 : Factorielle d'un Nombre:

let N = Number(prompt("entrez un nombre :"));
let Factorielle = 1;
for(let i = 1 ; i <= N ; i++){
    Factorielle =  Factorielle * i;
}
console.log(Factorielle);