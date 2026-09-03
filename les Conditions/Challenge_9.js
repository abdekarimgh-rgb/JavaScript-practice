var prompt = require("prompt-sync")();
    //Challenge 9 : Vérification d'Alphabet:

let X = prompt("entrez un caractere :");
if(X >= 'a' && X <= 'z' || X >= 'A' && X <= 'Z'){
    if(X >= 'a' && X <= 'z'){
        console.log( X + " un alphabet minuscule.");
    }
    else{
        console.log( X + " un alphabet majuscule.");
    }
}

else{
    console.log( X + " est ne pas un alphabet.");
}