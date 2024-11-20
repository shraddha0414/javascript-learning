const person = {

    fullName: "Jenny Gates",

    city: "LA"

}

 

// Not allowed as person reference variable is constant

// person = {

//     age: 60

// }

console.log(person);

person.city = "Pune";

console.log(person);

 

const array = [10, 20, 30, 40];

 

// Not allowed as array reference variable is constant

// array = [90, 100, 60];

 

console.log("======= Object Freezing ==========");

const student = {

    fullName: "Jenny Gates",

    city: "LA"

}

Object.freeze(student);

console.log(student);

student.fullName = "Donald Trump";

console.log(student);

 

console.log("======= Array Freezing ===========");

 

const arrayFrd = ["Jenny", "Elon", "Stew", "Ratan"];

console.log(arrayFrd);

arrayFrd.push("Sundar");

console.log(arrayFrd);

Object.freeze(arrayFrd);

arrayFrd.push("Bill");

console.log(arrayFrd);