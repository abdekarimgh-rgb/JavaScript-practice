var prompt = require("prompt-sync")();

function Minimum(a,b){
    if(a > b){
        return b;
    }
    else{
        return a;
    }
};

let N = Number(prompt("saisir  1er nomber :"));
let X = Number(prompt("saisir  2er nomber :"));

let result = Minimum(N,X);
console.log(`le Min entre ${X} et ${N} est : ${result}`);