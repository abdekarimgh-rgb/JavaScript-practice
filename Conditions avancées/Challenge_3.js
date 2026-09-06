var prompt = require('prompt-sync')();

let status = -1 ;
console.log(`
-0 pour temps partiel.
-1 pour temps plein`);
do{
    status = Number(prompt("Statut de l'employé :"));
}while(status < 0 || status > 1);

let jours_conges = Number(prompt("Nombre total de jours de congés accordés :"));
let  j_conges_utls = Number(prompt("Nombre de jours de congés utilisés :"));
let jour_rest = 0;

if(status == 1){
    if(j_conges_utls <= jours_conges){
    jour_rest = jours_conges - j_conges_utls;
    console.log("les jour de conges restants est : "+ jour_rest);
    }
        
    else{
        console.log("les jour de conges utilise depasser les jour de conjes accorde");
    }
}

else{
    if(j_conges_utls <= jours_conges / 2){
        jour_rest = (jours_conges / 2) - j_conges_utls;
        console.log("les jour de conges restants est : "+ jour_rest);
    }
    else{
        console.log("les jour de conges utilise depasser les jour de conjes accorde");
    }
}