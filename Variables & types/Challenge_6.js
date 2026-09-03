var prompt = require('prompt-sync')();
console.log("programme aui calculer la (+ - *  / ):");

let a = +prompt("entre la valeur de a:");
let b = +prompt("entre la valeur de b:");

console.log(typeof a);
console.log(typeof b);
//console.log("a - b =", a-b, "a + b =", a+b, "a * b =", a*b, "a / b =", a/b);


console.log(`result:
    - a + b = ${a+b}
    - a - b = ${a-b}
    - a * b = ${a*b}
    - a / b = ${a/b}`
);