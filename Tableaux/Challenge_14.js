var prompt = require(`prompt-sync`)();

let tabeau = [];
let taille = Number(prompt("entrez la taille :"));

console.log("remplis le tabeau :");
for(let i = 0 ; i < taille ; i++){
    let val = Number(prompt(`tableau[${i+1}] = `));
    tabeau[i] = val;
}

somme = 0;
console.log("Calculer la Moyenne");
for(let i = 0 ; i < taille ; i++){
    somme += tabeau[i];
}
console.log(somme / taille);