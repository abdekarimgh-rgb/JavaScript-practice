var prompt = require(`prompt-sync`)();

let tabeau = [];
let taille = Number(prompt("entrez la taille :"));

console.log("remplis le tabeau :");
for(let i = 0 ; i < taille ; i++){
    let val = Number(prompt(`tableau[${i+1}] = `));
    tabeau[i] = val;
}

let remplace = Number(prompt("la valeur à remplacer : "));
let N_valeur = Number(prompt("la nouvelle valeur"));
for(let i = 0 ; i < taille ; i++){
    if(remplace == tabeau[i]){
        tabeau[i] = N_valeur;
    }
}
console.log(tabeau);
