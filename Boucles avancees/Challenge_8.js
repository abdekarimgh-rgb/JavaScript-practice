/* Challenge 8 : Recherche Dichotomique
Écrivez un programme JavaScript qui implémente la recherche dichotomique 
dans un tableau trié d’entiers. Le programme doit demander à l’utilisateur
un nombre et rechercher ce nombre dans le tableau en utilisant la méthode 
de recherche dichotomique. */

var prompt = require("prompt-sync")();
let tableau = [2,8,9,12,47,65,89,78,98,100];
let sersh = prompt("recherche : ");
let trouve = 0;
for(let i = 0 ; i < tableau.length ; i++){
    if(sersh == tableau[i]){
        trouve++;
        break;
    }
}
if(trouve == 1){
    console.log("l'element est exist.");
}
else{
    console.log("l'element ne est pas exist.");
}