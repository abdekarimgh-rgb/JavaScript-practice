var prompt = require('prompt-sync')();

let C = prompt("entre un caractere :");

switch(C){
    case 'a' :
    case 'e' :  
    case 'i' :
    case 'o' :
    case 'y' :
    case 'A' :
    case 'E' :
    case 'I' :  
    case 'O' :
    case 'Y' :
    console.log("voyelle");
    break
    default:
    console.log("non vooyelle"); 
}