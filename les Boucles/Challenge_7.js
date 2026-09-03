var prompt = require("prompt-sync")();
    //Challenge 7 : Inversion d'un Entier:
let N = 12345;
let result  = 0;
let rest;
while(N > 0){
    rest  = N % 10;
    //result *= 10;
    result = result*10 + rest;
    N = Math.floor(N / 10);
}
console.log(result);