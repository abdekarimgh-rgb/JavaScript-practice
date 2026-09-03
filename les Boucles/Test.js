var prompt = require("prompt-sync")();


let age = Number(prompt("entrez votre ege :"));
let a = Number(prompt("entre 1.weekent 2. non"));

if(age < 5){    
    console.log("Gratuit");
}
else if(age >= 5 && age <=12){
    if(a === 1){
        console.log("70");
    }else{
        console.log("50");
    }

}else if(age >= 13 && age <= 64 ){
    if(a===2){
        console.log("100");
    }else{
        console.log("130");
    }
}
else{
    if(a===1){
        console.log("80");
    }else{
        console.log("60")
    }
}
