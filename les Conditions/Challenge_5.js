var prompt = require("prompt-sync")();

console.log("=> programme JavaScript piloté par menu pour convertir une année donnée en :");
let N = Number(prompt("entrez une annee"));
console.log("1.Mois");
console.log("2.Jours");
console.log("3.Heures");
console.log("4.Minutes");
console.log("5.Secondes");
let choix = Number(prompt("entrez votre choix :"));
let result = 0;

switch(choix){
    case 1 : 
    result = N * 12;
    console.log(result+ ' moins');
    break;
    case 2 : 
    result = N * 365;
    console.log(result + ' jours');
    break;
    case 3 : 
    result = N * 365 * 24;
    console.log(result + ' houres');
    break;
    case 4 : 
    result = N * 365 * 24 * 60;
    console.log(result + ' minutes');
    break;
    case 5 : 
    result = N * 365 * 24 * 60 *60;
    console.log(result + ' seconds');
    break;
    default : console.log("ce choix n.est pas exist..!");
}

