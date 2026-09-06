var prompt = require('prompt-sync')();

let age = Number(prompt("entre l'age du conducteur :"));
let type = -1;
console.log("ente=> 1 pour sportive, 2 pour utilitaire, 3 pour familiale");
do{
    type = Number(prompt("entre Type de voiture :"));
}while(type < 1 || type > 3);


let accident = Number(prompt("entre Nombre d'accidents au cours des 5 dernières années :"));

if(age < 25){
    console.log("Prime de base * 1.5");
}

else if(age >= 25 && age < 65){
    console.log("Prime de base");
}

else{
    console.log("Prime de base * 1.2");
}

if(type === 1){
    console.log("Prime * 2");
}
else if(type === 2){
    console.log("Prime * 1.2");
}
else{
    console.log("prime * 1.1");
}

if(accident > 1){
    console.log("Ajoutez 30% à la prime");
}