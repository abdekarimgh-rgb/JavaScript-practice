var prompt = require("prompt-sync")();

function CompteRebours(N){
    for(let i = N ; i >= 0; i--){
        console.log(`${i}`);
    }
}

let N = Number(prompt("saisir un terme :"));
CompteRebours(N);