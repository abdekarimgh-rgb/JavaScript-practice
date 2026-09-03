var prompt = require("prompt-sync")();

let tableau = [2,8,9,12,47,65,89,78,98,100];
let sersh = prompt("recherche : ");
let touve = recherche_dichotomique(tableau,0 , tableau.length-1, sersh);
if(touve == -1){
    console.log("NON trouvee.");
}
else{
    console.log("trouvee.");
}

function recherche_dichotomique(T,debut , fin, va){
while(debut <= fin){
        let millieu = Math.floor((debut + fin) / 2);
        if(va == T[millieu]){
            return millieu;
        }
        else if(va < T[millieu]){
            fin = millieu -1;
            return recherche_dichotomique(T,debut , fin, va);
        }
        else{
            debut = millieu + 1;
            return recherche_dichotomique(T,debut , fin, va);
        }}
    return -1;
}

