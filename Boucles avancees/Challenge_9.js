var prompt = require("prompt-sync")();

let N = Number(prompt("entrez le base :"));
let x = Number(prompt("entrez le exposant :"));
let R = 1;
let i = 0;
while(i < x){
    R = R *N;
    i++;
}
console.log(R);