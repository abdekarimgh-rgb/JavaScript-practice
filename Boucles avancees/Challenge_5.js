var prompt = require("prompt-sync")();

let N = Number(prompt("saisi un chiffre :"));
let result = 0;
for(let i = 1 ; i <= N ; i++){
    result+=i;
}
console.log("result est : "+ result);