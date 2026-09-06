var prompt = require("prompt-sync")();

let taille = Number(prompt("entre la taille de tableau :"));
let tableau = [];
for(let i = 0 ; i < taille ; i++){
    let val = Number(prompt(`tableau[${i + 1}] = `));
    tableau.push(val);
}
let min = tableau[0];
for(let i = 0 ; i < taille ; i++){
    if(tableau[i] < min){
        min = tableau[i];
    }
}

console.log(`le minimum d'element est : ${min}`);