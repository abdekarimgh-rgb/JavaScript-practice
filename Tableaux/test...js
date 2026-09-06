const prompt = require("prompt-sync")();

let tableau = [];
let tableau_N = [];

let taille = Number(prompt("entrez la taille :"));

console.log("remplis le tableau :");
for (let i = 0; i < taille; i++) {
  tableau[i] = Number(prompt(`tableau[${i + 1}] = `));
}

let taille_N = Number(prompt("entrez la taille_N :"));

console.log("remplis le tableau_N :");
for (let i = 0; i < taille_N; i++) {
  tableau_N[i] = Number(prompt(`tableau_N[${i + 1}] = `));
}

// نفس الطريقة ديالك مع تحديد المجموع الصريح
let totalTaille = taille + taille_N;
let j = 0;

for (let i = taille; i < taille + taille_N; i++) {
  tableau[i] = tableau_N[j];
  j++;
}

console.log(tableau);