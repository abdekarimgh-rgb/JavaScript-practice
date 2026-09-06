var prompt = require('prompt-sync')();

let consomation = Number(prompt("Consommation d'électricité (en kWh) : ")); 
let type_utilisation;   // 1.resident  2.commercial
let type_contrat;       // 0.standard  1.rédui
let tarif = 0;

console.log(`
    -1.resident  
    -2.commercial`);

do{
    type_utilisation = Number(prompt("chaisir le type de consomation : "));
}while(type_utilisation < 1 || type_utilisation > 2);

console.log(`
    -0.standard  
    -1.rédui`)
do{
    type_contrat = Number(prompt("choisir le type de contract :"))
}while(type_contrat < 0 || type_contrat > 1);

if(type_utilisation === 1){
    if(type_contrat === 0){
        tarif = 0.20;
    }
    else{
        tarif = 0.15;
    }
}

else{
    if(type_contrat === 0){
        tarif = 0.30;
    }
    else{
        tarif = 0.25;
    }
}

let total = consomation * tarif
if(consomation >  500){
    console.log(" la consommation dépasse 500 kWh : +10%");
    total  = total + total * 0.1;
}

console.log("la Facture d'Électricité est : "+ total);