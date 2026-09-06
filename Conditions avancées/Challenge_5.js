var prompt = require('prompt-sync')();

let budget = Number(prompt("entrz le budget : "));
let destin = -1;

do{
    destin = Number(prompt(("choisir la Destination (1 pour plage, 2 pour montagne, 3 pour ville) :")));
}while(destin < 1 || destin > 3);

let Numbre_personne = Number(prompt("Entrez la Nombre de personnes :"));

if(budget >= 1000){
    console.log("Voyage haut de gamme.");
}
else if(budget > 500 ){
    console.log("Voyage moyen.");
}
else{
    console.log("Voyage économique");
}

if(budget >= 1000 && Numbre_personne > 2){
    console.log("destination Plage:");
}
else if(budget >= 500 && Numbre_personne <= 2 ){
    console.log("Destination Montagne");
}
else{
    console.log("Ville pour tout budget et nombre de personnes");
}