const prompt = require('prompt-sync')(); //to shown in the terminal
let score = prompt("enter the score: ");



// let score = 80;

if (score >= 90) {
    console.log("grade:A");
    
}else if (score >= 80) {
    console.log("grade:B");
      
}else if (score >=70) {
    console.log("grade:C");
    
}else{
    console.log("grade:F");
    
}