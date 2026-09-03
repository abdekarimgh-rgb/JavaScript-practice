var prompt = require("prompt-sync")();

let N = prompt("entre un nombre :");
if(N % 2 != 0 ){
    console.log("impair.");
}

else {
    console.log("pair.");
}