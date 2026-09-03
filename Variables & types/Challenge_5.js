var prompt = require('prompt-sync')();
console.log(" un programme qui demande la température en Celsius et affiche l'état de l'eau à cette température (solide, liquide, gaz). ");

let c = prompt("etre la temperature");
console.log(" l'état de l'eau est :");

if(c < 0){
    console.log("Solide");
}
else if(c >= 0 && c < 100){
    console.log("Liquide");
}
else{
    console.log("Gaz");
}