var prompt = require('prompt-sync')();

let Revenu_annuel = Number(prompt("entrez le revenu annuel :"));

let  status_fiscal = -1;
do{
    console.log(`
        choisir votre status :
    -1 pour célibataire, 
    -2 pour marié 
    -3 pour chef de famille`);
    status_fiscal = Number(prompt("tab ici :"));
}while(status_fiscal < 1 || status_fiscal > 3);

let Deduction = 0;
let impot = 0;

if(Revenu_annuel <= 20000){
    impot = 0.05;
}
else if(Revenu_annuel > 20000 && Revenu_annuel <= 50000){  //flag !
    impot = 0.1;
}
else{
    impot = 0.2;
}

if(status_fiscal === 1){
    Deduction = 1000;
}
else if(status_fiscal === 2){
    Deduction = 2000;
}
else{
    Deduction = 3000;
}

let impotsApayer = Revenu_annuel * impot - Deduction;
if(impotsApayer < 0 ){
    impotsApayer = 0;       //l'impot ne peut pas etre nigatif.
}
console.log(" Impôts = " + impotsApayer);