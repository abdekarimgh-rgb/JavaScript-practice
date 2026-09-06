var prompt = require(`prompt-sync`)();

let tabeau = [];
let taille = Number(prompt("entrez la taille :"));

console.log("remplis le tabeau :");
for(let i = 0 ; i < taille ; i++){
    let val = Number(prompt(`tableau[${i+1}] = `));
    tabeau[i] = val;
}

console.log(tabeau);
console.log("les nomber pair :");
for(let i = 0 ; i < taille ; i++){
    if(tabeau[i] % 2 === 0){
        console.log(tabeau[i]);
    }
}
