var prompt = require("prompt-sync")();

let n = Number(prompt("entre un nombre :"));
let R ;
for(let i = n ; i > 0 ; i--){
    console.log(n + "x" +i+ "="+ i*n);
}