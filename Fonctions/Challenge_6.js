var prompt = require("prompt-sync")();

function Fibonacci(x){
    let F0 = 0;
    let F1 = 1;
    let Fn;
    for(let i = 0 ; i < x ; i++){
        Fn = F0 + F1;
        F1 = F0;
        F0 = Fn;
    }
    return F0;
}

let N = Number(prompt("saisir un terme :"));
let result = Fibonacci(N);
console.log(result);

