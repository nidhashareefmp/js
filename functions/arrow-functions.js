// const handleSubmit = () => {
//     //block of code
// }



//----function declaration----
// function add(a,b){
//     return a + b;
// }
// console.log(add(2,4));


//----arrow function----
// arrow fn is a shorter syntax for writing fn's in js, Introduced in ES-6(ECMA SCRIPT in 2015) European Computer Manufature Association

// const add = (a,b) => a + b;

// console.log(add(2,2));


//-----sinle parameters(no paranthesis needed)----

const square = x => x * x;
console.log("square of 4:",square(4));

//--- no parameters(empty paranthesis)
const greet = () => console.log("hy...");
greet();


//---multi-line function----
const divide = (a,b) => {
    const result = a / b;
    return result;
}
console.log("division of 10,2 is:",divide(10,2));

