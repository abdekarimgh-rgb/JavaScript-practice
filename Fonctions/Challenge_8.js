var prompt = require("prompt-sync")();

let N = Number(prompt("saisir un terme :"));

function VerificationParite(x){
        return x % 2 == 0;
}

function affichage(){
    if(VerificationParite(N)){
        console.log("pair");
    }
    else{
        console.log("impair");
    }
};

affichage(N);