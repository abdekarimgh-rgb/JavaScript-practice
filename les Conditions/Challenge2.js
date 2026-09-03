var prompt = require("prompt-sync")();

let age = prompt("entre l'age du conducteur :");
console.log("ente=> 1 pour sportive, 2 pour utilitaire, 3 pour familiale");
let type = prompt("entre Type de voiture :");
let accident = prompt("entre Nombre d'accidents au cours des 5 dernières années :");

if(age < 25){
    console.log("Prime de base * 1.5");
}

else if(age >= 25 && age < 65){
    console.log("Prime de base");
}

else(age >= 65){
    console.log("Prime de base * 1.2");
}

if(type == 1){
    console.log("Prime * 2");
}
else if(type == 2){
    console.log("Prime * 1.2");
}
else{
    
}