// Class is the Blueprint or Design or Template

class Student{

    // Data Member

    // Constructor 

    constructor(fullName, city, age, isMarried){

        this.fullName = fullName;

        this.city = city;

        this.age = age;

        this.isMarried = isMarried;

    }

    // Member Function or methods

    details(){

        console.log(`==== Students ${this.fullName} Details ====== `);

        console.log(`City: ${this.city}, AGE: ${this.age}, Is Married: ${this.isMarried}`);

    }

}

 

const stdElon = new Student("Elon Musk", "LA", 22, true);

stdElon.details();

//console.log(stdElon.fullName);

 

// console.log(stdElon);

 

const stdStew = new Student("Stew Job", "Pune", 56, false);

// console.log(stdStew);

stdStew.details();




console.log("====== instanceof operator =======");

 

class Department{

 

}

const dept = new Department();

 

console.log(stdStew instanceof Student);

console.log(dept instanceof Student);