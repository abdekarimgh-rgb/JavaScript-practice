var prompt = require('prompt-sync')();

let performance = -1;
do{
    performance = Number(prompt("Score de performance (de 0 à 100) : "));
}while(performance < 0 || performance > 100);

let anciennet = Number(prompt("Ancienneté (en années) : "));
console.log(`
    0 pour aucune
    1 pour une
    2 pour deux ou plus`);

let Recompenses = -1;
do{
    Recompenses = Number(prompt("Récompenses reçues : "));
}while(Recompenses < 0 || Recompenses > 2);



if(performance >= 90 && anciennet >= 5){
    console.log("Excellente");
}
else if(performance >= 75 && anciennet >= 3 ){
    console.log("Bonne");
}
else if(performance >= 50 && anciennet < 3){
    console.log("Satisfaisante");
}

else{
    console.log(" Insuffisante")
}

if(Recompenses === 1){
    console.log("bonus de 10%");
}
else if(Recompenses === 2){
    console.log("bonus de 20%");
}
else{
    console.log("bonus de 0%");
}