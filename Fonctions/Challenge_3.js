var prompt = require("prompt-sync")();

function Maximum(a,b){
    if(a < b){
        return b;
    }
    else{
        return a;
    }
};

let N = Number(prompt("saisir  1er nomber :"));
let X = Number(prompt("saisir  2er nomber :"));

let result = Maximum(N,X);
console.log(`le Max entre ${X} et ${N} est : ${result}`);