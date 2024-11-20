let person = {

    fullName: "Jenny Gates",

    city: "LA"

}

// Shallow Clone

console.log("========Shallow Clone ======= ");

const student = person;

 

student.fullName = "Elon Musk";

console.log(person.fullName);

 

console.log("========Deep Clone ======= ");

 

let jenny = {

    fullName: "Jenny Gates",

    city: "LA"

}

const clonedJenny = Object.assign({ }, jenny);

console.log(jenny);

console.log(clonedJenny);

clonedJenny.fullName = "Stew Job";

console.log(jenny);

console.log(clonedJenny);

 

console.log("====== Deep Clone using spread operator ==========");

const newCloneJenny = {...jenny};

console.log("========== merge object ===========");

const emp = {

    fullName: "Jenny Gates",

    city: "LA" 

}

const emp_address = {

    pin: 411057,

    street : "Wakad"

}

 

// Object.assign(emp, emp_address)

const newObject = Object.assign({}, emp, emp_address)

console.log(newObject);

const refVariable = {...emp, ...emp_address};