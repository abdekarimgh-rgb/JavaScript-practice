var prompt = require("prompt-sync")();

let text = prompt("saisie un text : ");
let chaine = "";

for( let i = 0 ; i < text.length - 1; i++){
    if(text[i] !== " "){
       chaine += text[i];
    }
}
text = chaine;
console.log(`=> ${text}`);

    //test
console.log(`=> ${chaine}`);