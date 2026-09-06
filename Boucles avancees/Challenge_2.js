/* var prompt = require("prompt-sync")();

let n = 7;
let j = 0;
let k = 0;
let i = 0;
let ligne ; 
for(let i = 0 ; i <= n ; i++){
    ligne = "";
    for(let j = 0 ; j <= n-i ; j++){
        ligne += " ";
    }
    for(let k = n ; k >= n - i ; k--){
        ligne+="*"
    }
    console.log(ligne);
} */


var prompt = require("prompt-sync")();

let n = 20;
let j = 0;
let k = 0;
let i = 0;
let ligne ; 
for(i = 0 ; i <= n ; i++){
    ligne = "";
    for( j = 0 ; j <= n-i ; j++){
        ligne += " ";
    }
    for( k = j ; k <= n-j+2 ; k++){
        ligne+="*";
    }
    console.log(ligne);
}

/* var prompt = require("prompt-sync")();

let n = 20;
let j = 0;
let k = 0;
let i = 0;
let ligne ; 
for(i = 0 ; i <= n ; i++){
    ligne = "";
    for( j = 0 ; j <= n-i ; j++){
        ligne += " ";
    }
    for( k = j ; k <= n-j+2 ; k++){
        if(k === j || k === n-j+2){
            ligne+="*";
        }
        else{
            ligne+=" ";
        }
    }
    console.log(ligne);
} */