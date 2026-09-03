var prompt = require("prompt-sync")();

let chaine = prompt("entre un chaine :");
let invChine = "" ;
for(let i = chaine.length - 1 ; i >= 0 ; i--){
    invChine += chaine[i];
}
console.log(invChine);