var prompt = require('prompt-sync')();

let N = Number(prompt("saisi un chiffre :"));
for(let i = 1 ; i <= N ; i++){
    if(N % i == 0){
        console.log(i+",");
    }
}