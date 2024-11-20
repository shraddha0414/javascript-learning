const person = {
    fullName : "Jenny",
    email: "jenny@gmail.com",
    qualification: "BE CSC",
    isMarried: true,
    age: 55,
    city : "Pune",
    pin: 411057,
    country : "India",
    skill: "Angular and React"
}
// const fullName = person.fullName;
// const age = person.age;
// const skill = person.skill;
// const pin = person.pin;
// const isMarried = person.isMarried;

const {fullName, age, skill, pin, isMarried, graduation = "BE CSC" } = person;
console.log(fullName, age, skill, pin, isMarried, graduation);

console.log("Array Destructuring......");
let array = [10, 20, 60];
const [ n1, n2, n3, n4=1 ] = array;
console.log(n1, n2, n3, n4);