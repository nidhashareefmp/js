function sum(...numbers){
    return numbers.reduce((total, num) => total + num,0)
}

console.log(sum(1,2));
console.log(sum(3,5,8,2));
console.log(sum(45,57,12,52,54));





