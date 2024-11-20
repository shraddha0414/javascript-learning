console.log("===== 1. Object Literals =========")

 

let person = {

    fullName: "Elon Musk",

    city: "LA",

    isMarried: true,

    age: 54

};

console.log(typeof person);

console.log(person);

console.log("---- Reading values from the object ---- ");

console.log("===== 1. DOT Notation =========");

const fullName = person.fullName;

console.log('Person Full name is: ${fullName}');

 

console.log("===== 2. Square Bracket [] Notation =========");

const age = person["age"];

console.log('Person age is: ${age}');

console.log("---- Adding property into the object ---- ");

person.graduation = "MSC Physics";

console.log(person);

console.log(person.graduation);

 

console.log("---- Delete property into the object ---- ");

delete person.isMarried;

console.log(person);

 

console.log("---- Update property into the object ---- ");

person.age = 45;

console.log(person);

let student = {

    fullName : "Swastik",

    email: "abc@gmail.com",

    qualification: "BE CSC",

    gender: "Male",

    isMarried: false,

    age: 25,

    hobbies: ["Traveling", "Talking with Girls", "Reading"],

    details:function(){

        console.log(`======= Student ${this.fullName} Details is: ======= `);

        console.log('Email: ${this.email}, Qualification: ${this.qualification}');

        console.log(` Married Status: ${this.isMarried}, AGE: ${'this.age'}`);

        console.log('Hobbies: ${this.hobbies}');  

    } 

}

student.details();

console.log('======= Nested Object =======');

let studentJenny = {

    fullName : "Jenny",

    email: "jenny@gmail.com",

    qualification: "BE CSC",

    isMarried: true,

    age: 55,

    hobbies: ["Traveling", "Programming", "Reading"],

    marks: {

        physics: 90,

        maths: 67,

        programming: 89,

        socialScience: 78 

    }

}

console.log(studentJenny.marks.programming);

studentJenny.hobbies.push("Watching Movie");

const arrayHobbies = studentJenny.hobbies;

console.log('====== Jenny Hobbies===========');

for (const element of arrayHobbies) {

    console.log(element);

}