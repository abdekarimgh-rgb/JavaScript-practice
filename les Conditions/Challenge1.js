var prompt = require("prompt-sync")();

let revenu = prompt("entre la revenu annul :");
let score = prompt("entre le score :");
let duree = prompt("entre le duree :");

if(revenu >= 30000 && score >= 700 && duree <= 10 ){
    console.log("Éligible");
}

else if(revenu >= 30000 && score  >= 650 && duree <= 15){
    console.log("Éligible avec conditions");
}
else{
    console.log("Non éligib");
}