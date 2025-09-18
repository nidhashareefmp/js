const prompt = require('prompt-sync')(); 

let number = Number(prompt("Enter the number: ")); 

let checkNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (number % 2 === 0) {
            resolve(`✅ The number ${number} is even`);
        } else {
            reject(`❌ The number ${number} is odd`);
        }
    }, 1500);
});

checkNumber
  .then(result => console.log(result))   // if resolved
  .catch(error => console.log(error))   // if rejected
  .finally(() => console.log("Number checking finished"));
