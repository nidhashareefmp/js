const prompt = require('prompt-sync')();  //require is used to import,()is required in prompt

let temperature = prompt("enter the temperature: ");  


// let temperature = 5;
if (temperature >20) {  //if its more than 20 warm and less than 20 cool
    
    console.log("its warm outside");
} else{
    console.log("its cool outside");
    
}