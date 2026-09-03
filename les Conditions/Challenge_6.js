var prompt = require("prompt-sync")();

let N = Number(prompt('entrez un nombre :'));
if(N < 0){
    console.log('negatif');
}

else if(N > 0){
    console.log('positif');
}

else{
    console.log('NUll');
}