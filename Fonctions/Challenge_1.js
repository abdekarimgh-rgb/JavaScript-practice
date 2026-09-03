var prompt = require("prompt-sync")();

function additionner(a, b){
    return a+b;
};

let N = Number(prompt("saisir  1er nomber :"));
let X = Number(prompt("saisir  2er nomber :"));

let result = additionner(N,X);
console.log(result);