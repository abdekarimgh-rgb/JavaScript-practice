var prompt = require("prompt-sync")();

let tabeleau = [];
let tabeleauCopier = [];
let taille = Number(prompt("entrez la taille de tableau : "));
console.log("remplis le tableau : ");

for(let i = 0 ; i < taille ; i++){
    let val = Number(prompt(`tableau[${i+1}] = `));
    tabeleau[i] = val;
}

console.log(`Voici le tabeau : ${tabeleau}`);

for(let i = 0 ; i < taille ; i++){
    tabeleauCopier[i] = tabeleau[i];
}

console.log(`Voici le tabeau Copie : ${tabeleauCopier}`);
