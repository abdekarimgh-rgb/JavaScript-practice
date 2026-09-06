var prompt = require("prompt-sync")();

let taille = Number(prompt("entre la nombre des element :"));
let tableau = [];
let somme = 0;
for(let i = 0 ; i < taille; i++){
    let val = Number(prompt(`entre les element ${i +1} :  `));
    tableau.push(val);
    somme += tableau[i];
}

console.log(`Voici les element de taleau : [${tableau}]`);
console.log(`la moyene des elemet est : ${somme / taille}`)
