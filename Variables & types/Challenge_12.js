var prompt = require("prompt-sync")();
console.log(" un programme JavaScript pour afficher un nombre entier à quatre chiffres dans l'ordre inverse sans utiliser de boucle.");

let N = 1234;

rest = (N % 10);
N = N / 10;
let result = 0
result = (result + rest)*10;

rest = (N % 10);
N = N / 10;
result = (result + rest)*10;

rest = (N % 10);
N = N / 10;
result = (result + rest)*10;
//
//rest = (N % 10);
//N = N / 10;
//result = (result + rest)*10;

console.log(result)