var prompt = require('prompt-sync')();

console.log("la formule  :  ax^2 + ax + c = 0");
let a  = Number(prompt("a="));
let b  = Number(prompt("b="));
let c  = Number(prompt("c="));
let delta = (b**2) - (4 * a * c);

if(delta > 0 ){
    let x1;
    let x2;
    console.log("l'equation admit deux solitions :");
    x1 = (-b - Math.sqrt(delta)) / (2 * a);
    x2 = (-b + Math.sqrt(delta)) / (2 * a);
    console.log("x1 =", x1);
    console.log("x2 =", x2);
}

else if(delta == 0){
    console.log("l'equation admit un solition :");
    let x0 = -b / (2 * a);
    console.log("x0 =", x0);
}

else{
    console.log("l'equation admit aucun solition :");
}

