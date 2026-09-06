var prompt = require("prompt-sync")();

let tableau = [];
let taille = Number(prompt("entre la taille de tabelau :"));

for(let i = 0 ; i < taille ; i++){
    let val = Number(prompt(`entrez l'elemnt ${i+1} : `));
    tableau[i] = val;
}
console.log(`les elements des tableau est : ${tableau} `);

for(let i = 0 ; i < taille ; i++){
        for(let j = 1 ; j < taille ; j++){
            if(tableau[j] < tableau[j-1]){
                let tab = tableau[j];
                tableau[j] = tableau[j-1];
                tableau[j-1] = tab;
            }
        }
}

console.log(tableau);

