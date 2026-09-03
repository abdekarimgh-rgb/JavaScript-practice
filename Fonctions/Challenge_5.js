var prompt = require("prompt-sync")();

function Factorielle(a){
    let R = 1;
    for(let i = 1; i <= a ; i++){
        R = R * i;
    }
    return R;
};

let N = Number(prompt("saisir un nombre :"));
let result = Factorielle(N);
console.log(`le Factorielle de ${N} est : ${result}`);