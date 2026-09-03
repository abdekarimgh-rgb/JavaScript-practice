var prompt = require("prompt-sync")();

let A = prompt("entre un chaine :");
let B = prompt("entre autre chaine :");
if(A===B){
    console.log("les chaînes sont égales");
}
else{
    console.log(" les chaînes sont différentes.");
}