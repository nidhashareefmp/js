// let age = 18;
// let result = (age >=18) ? "adult" : "minor";
// console.log(result);


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your age: ", function(age) {
  age = Number(age);
  let result = (age >= 18) ? "adult" : "minor";
  console.log("You are " + result);
  rl.close();
});