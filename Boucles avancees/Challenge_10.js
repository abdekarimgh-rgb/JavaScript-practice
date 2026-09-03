var prompt = require("prompt-sync")();

let N = Number(prompt("entre la longeur de mode de passe :"));


function ModePasse(N){
    let T = ['q','y', 'w', 'e','u','i','o','j','f']; 
    let mot = "";                                        
    for(let i = 0 ; i < N ; i++){
        let p = Math.floor(Math.random(T) * 9);
        mot += T[p];
    }
    console.log(mot);
};
ModePasse(N);