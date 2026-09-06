
/* Challenge 9 : Calcul du Salaire avec Primes
Écrivez un programme JavaScript pour calculer le salaire d'un employé en fonction de :

Salaire de base (en euros)
Nombre d'heures supplémentaires
Type de poste (1 pour junior, 2 pour senior)
Les règles de calcul sont :
Heures supplémentaires : 1,5 fois le taux horaire
Prime pour poste senior : 20% du salaire de base
Prime pour poste junior : 10% du salaire de base */

var prompt = require('prompt-sync')();

let Salaire_base = Number(prompt("Salaire de base (en euros) : "));
let nombre_hours_supp = Number(prompt("Nombre d'heures supplémentaires: "));
let type_post = -1;

do{
    console.log(`
        -1 pour junior 
        -2 pour senior`);
        type_post = Number(prompt("choisir le typede post : "));
}while(type_post < 1 || type_post > 2);

let Prime_post = 0;
if(type_post == 2){
    Prime_post = 0.2;
}
else{
    Prime_post = 0.1;
}

let montant_hours_supp = nombre_hours_supp * 1.5;
let Salaire =Salaire_base + montant_hours_supp + Salaire_base * Prime_post;

console.log(" Salaire avec Primes est : "+ Salaire);