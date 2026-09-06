var prompt = require("prompt-sync")();

let tabeau = [];
let taille = Number(prompt("entrez la taille :"));

console.log("remplis le tabeau :");
for(let i = 0 ; i < taille ; i++){
    let val = Number(prompt(`tableau[${i+1}] = `));
    tabeau[i] = val;
}

let trouve = -1;
let position = -1;
let sersh = Number(prompt("recherche : "));
for(let i = 0 ; i < taille ; i++){
    if(sersh == tabeau[i]){
        trouve = 0;
        position = i;
        break;
    }
}
if(trouve == 0){
    console.log(`l'element ${sersh} est trouve dans la position ${position+1}.`);
}
else{
    console.log(`l'element ${sersh} est ne trouve pas.`);
}