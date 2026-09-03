var prompt = require("prompt-sync")();
console.log("programme pour vérifier si le caractère majuscule ou non.");

let C = prompt("entrez un caractere : ");

if(C >= 'A' && C < 'Z'){
    console.log("Le caractere et majuscule.");
}

else{
    console.log("Le caractere et miniscule.");
}