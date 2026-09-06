var prompt = require("prompt-sync")();

let taille = Number(prompt("entrez les element de tableau :"));
let tableau = [];
tableauResult = [];
let multip = Number(prompt("entrez la multiplicateur :"));

for(let i = 0 ; i <taille ; i++){
    let val = Number(prompt(`tableau[${i+1}] = `));
    tableau[i] = val;
}

let result = 0;
for(let i = 0 ; i < taille ; i++){
    result = tableau[i] * multip;
    console.log(`${multip} x ${tableau[i]} = ${result}`);
    tableauResult[i] = result;
}

console.log(`voici la meettre a jour de tableau : [${tableauResult}]`);
