var prompt = require("prompt-sync")();

let chaine = "hello every one"
let lettre = prompt("entre un chaine :");
compteur = 0;
for(let i = 0; i < chaine.length ; i++){
    if(lettre === chaine[i]){
        compteur++;
    }
}
console.log(`la lettre ${lettre} apparait ${compteur}`);
