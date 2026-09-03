var prompt = require("prompt-sync")();

let n = Number(prompt("entre un nombre :"));
result = 0;
for(let i = 1 ; i <= n ; i++){
    result += i;
}
console.log(result);