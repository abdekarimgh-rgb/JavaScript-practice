var prompt = require("prompt-sync")();

const multiplication = (a,b) => a * b;

let N = Number(prompt("saisir  1er nomber :"));
let X = Number(prompt("saisir  2er nomber :"));

console.log(`le produt de ${X} et ${N} est : ${multiplication(N,X)}`);