const students = [
    {name:'riha',age:20, grade:'A'},
    {name:'niha',age:21, grade:'B'},
    {name:'siha',age:22, grade:'C'}

]

//accessing value
console.log(students[0].name);
console.log(students[1].grade);

//looping through object array
students.forEach(stdnts => {
    console.log(`${stdnts.name} is ${stdnts.age} years old `);
    
})

