var prompt = require(`prompt-sync`)();

let tabeau = [];
let tabeau_N = [];
let taille = Number(prompt("entrez la taille :"));

console.log("remplis le tabeau :");
for(let i = 0 ; i < taille ; i++){
    tabeau[i] = Number(prompt(`tableau[${i+1}] = `));
}

let taille_N = Number(prompt("entrez la taille_N :"));
console.log("remplis le tabeau_N :");
for(let i = 0 ; i < taille_N ; i++){
    tabeau_N[i] = Number(prompt(`tableau_N[${i+1}] = `));
}

//fin = tabeau + taille_N;
let j  = 0;
for(let i = taille ; i < taille_N + taille ; i++){
    tabeau[i] = tabeau_N[j];
    console.log(i +"-"+ j);
    j++;
} 
console.log(tabeau);