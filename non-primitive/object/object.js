const person = {
    name: "ansar",
    age: 35,
    qualifiaction: "10th",
    isStudent: false
}
console.log(person.name)
console.log(person.age)

//add or modify datas

person.city = "Kasaragod"
person.age = 40;
console.log(person)

//delete city from person details

delete person.city;
console.log("final person detail is: ", person);