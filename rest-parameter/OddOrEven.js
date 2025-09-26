function oddEven(...numbers) {
    let even = [];
    let odd = [];

    numbers.forEach(num => {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    });

    return { even, odd };  // return as object
}

console.log(oddEven(1, 2));
console.log(oddEven(3, 5, 8, 2));
console.log(oddEven(45, 57, 12, 52, 54));
