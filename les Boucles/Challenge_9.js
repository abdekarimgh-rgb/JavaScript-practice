var prompt = require("prompt-sync")();
    //Challenge 9 : Compteur de Chiffres:

//do{
//    var N = Number(prompt("entre un entier positif :"));
//}while(N < 0);
let N = Number(prompt("entre un entier positif :"));
let i=0;
while(N > 0){
    N = Math.floor(N/10);
    i++;
}
console.log(i);