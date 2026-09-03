var prompt = require("prompt-sync")();

let text = prompt("saisie un text : ");
console.log("VOUS AVEZ SAISIR : "+text);
let compteur = 0;
for(let i = 0 ; i < text.length ; i++){
    compteur++;
}
console.log(compteur);
