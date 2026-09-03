var prompt = require('prompt-sync')();

let A = +prompt("entre 1er nombre :");
let B = +prompt("entre 2er nomber :");

if(A == B){
    console.log("result = ", (A + B) * 3);
}

else{
    console.log("result = ", A + B);
}