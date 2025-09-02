//single value
let numbers = [1,2,3,4];
let sum = numbers.reduce((acc,num) => acc + num,0);
console.log(sum);

//acc= accumulator(0)
//num - each elements in the array

// 0+1 =1
// 1+2 = 3
// 3+3 =6
//6+4=10