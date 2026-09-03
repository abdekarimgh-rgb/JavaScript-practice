var prompt = require("prompt-sync")();
    //Challenge 1 : Table de Multiplication
let N = Number(prompt("entrez un nombre :"));
for(let i = 1 ; i <= 10 ; i++){
    console.log(i +" x "+ N +" = "+ i*N);
}