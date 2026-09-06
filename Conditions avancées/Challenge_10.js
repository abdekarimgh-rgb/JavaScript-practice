/*
Challenge 10 : Plan de Retraite avec Épargne
Écrivez un programme JavaScript pour déterminer le plan de retraite en fonction de :

Âge
Années de cotisation
Montant total épargné (en euros)

Les plans sont :

Âge >= 65 ans et Années de cotisation >= 30 ans et Montant >= 100 000 € : 
Plan complet avec pension élevée

Âge >= 65 ans et Années de cotisation >= 20 ans et Montant >= 50 000 € : 
Plan partiel avec pension moyenne

Âge < 65 ans : Plan épargne non encore disponible
Ajoutez un bonus de 5% pour chaque tranche de 10 000 € au-delà de 50 000 € épargnés. */

var prompt = require('prompt-sync')();

let age = Number(prompt("entre votre age :"));
let Annees_cotisation = Number(prompt("Années de cotisation : "));
let Montant_epragne = Number(prompt("Montant total épargné (en euros) : "));

if(age >= 65 && Annees_cotisation >= 30 && Montant_epragne >= 100000){
    console.log("Plan complet avec pension élevée");
    let tranche  = Math.floor((Montant_epragne - 50000) / 10000 );
    let bonusFin = tranche * 0.05;
    console.log("avec bonus de : "+ bonusFin*100 +"%");
}

else if(age >= 65 && Annees_cotisation >= 20 && Montant_epragne >= 50000){
    console.log("Plan partiel avec pension moyenne");
    let tranche  = Maath.floor((Montant_epragne - 50000) / 10000 );
    let bonusFin = tranche * 0.05;
    console.log("avec bonus de : "+ bonusFin * 100 +"%");
}

else{
    console.log("Plan épargne non encore disponible");
}

