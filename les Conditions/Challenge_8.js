var prompt = require("prompt-sync")();
    // Challenge 8 : Mention Obtenue

let N = Number(prompt("entrez votre note : "));
if(N < 10 && N >= 0){
    console.log("recalé");
}
else if(N >= 10 && N < 12){
    console.log("passable");
}
else if(N >= 12 && N < 14){
    console.log("assez bien");
}
else if(N >= 14 && N < 16){
    console.log("bien");
}
else if(N >= 16 && N <= 20){
    console.log("tres bien");
}
else{
    console.log("ERROR");
}