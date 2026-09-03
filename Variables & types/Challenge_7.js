var prompt = require('prompt-sync')();
console.log("programme JavaScript pour calculer la moyenne pondérée de trois nombres donnés par l'utilisateur.");

let nombre_1 = +prompt("entre la 1er nombre :");
let nombre_2 = +prompt("entre la 2er nombre :");
let nombre_3 = +prompt("entre la 3er nombre :");

console.log("result = ",((nombre_1 * 2) + (nombre_2 * 3) + nombre_3 * 5) / 10);
