var prompt = require("prompt-sync")();

let N = Number(prompt("saisi un chiffre :"));
let rest;
let inverse = 0;
let result = 0;
while(N > 0){
    rest = N % 10;
    result = (result*10) + rest;
    N=Math.floor(N/10);
}
console.log(result);