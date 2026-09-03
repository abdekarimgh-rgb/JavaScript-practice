var prompt = require("prompt-sync")();
    // Affichage de la Suite de Fibonacci:
console.log("F0 = 0");
console.log("F1 = 1");
let n = Number(prompt("entrez nombre des premiers termes :"));
let F0 = 0;
let F1 = 1;
let Fn;
for(let i = 0 ; i < n ; i++){
    Fn = F0 + F1;
    F1 = F0;
    F0 = Fn;
    console.log(F1);
}