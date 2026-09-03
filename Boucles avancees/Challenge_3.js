var prompt = require("prompt-sync")();

var N = Number(prompt("entre un nomber :"));

for(let i = 2 ; i <= N ; i++){
    var indice = 0;
    for(let j = 2 ; j < i ; j++){
        if(i % j == 0){
            indice++;
            break;
        }
    }
    if(indice == 0){
        console.log( i+" ");
    }
}
   
    