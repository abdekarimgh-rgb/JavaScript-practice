var prompt = require(`prompt-sync`)();

let tabeau = [];
let tabeauInverse = [];
let taille = Number(prompt("entrez la taille :"));

console.log("remplis le tabeau :");
for(let i = 0 ; i < taille ; i++){
    let val = Number(prompt(`tableau[${i+1}] = `));
    tabeau[i] = val;
}

console.log("l'inverse d'un tableau :");
let j = 0;
let i = taille-1;
while(j < taille){
    tabeauInverse[j] = tabeau[i];
    i--;
    j++;
}
console.log(tabeauInverse);