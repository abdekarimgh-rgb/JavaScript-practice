var prompt = require("prompt-sync")();
console.log("un programme JavaScript pour trouver la distance entre deux points donnés dans un espace 3D");

console.log("les coordonnes de A");
let Xa = prompt("X = ");
let Ya = prompt("y = ");
let Za = prompt("Z = ");

console.log("les coordonnes de B");
let Xb = prompt("X = ");
let Yb = prompt("y = ");
let Zb = prompt("Z = ");

console.log("Distance =", Math.sqrt(((Ya-Xa)**2 + (Yb-Xb)**2 + (Zb - Za)**2)));