var prompt = require("prompt-sync")();

let T = [];
let = prompt
let taille = prompt("entre la taille de tableau :");
console.log("remplis le tableau :");
for(let i = 0 ; i < taille ; i++ ){
    let val = prompt(`Entrez l'element ${i + 1} :`);
    T.push(val);
}

console.log(`voici les elements de ttableau :
    ${T}`);