//fn expression is a way to define a fn inside an expression and assign it to a variable


// syntax
// let sum = function(){
//block of code
//}
//sum();

//annonymus fn - fn without name

const greet = function(){
    console.log("hi");
    
}
greet();  //calling fn

console.log(typeof greet); //check the type


//----key features
//1.annonymus or named
//2.not hoisted
//3.can be used as argument
//4.can be assign to variables / objects