let studentJenny = {

    fullName : "Jenny",

    email: "jenny@gmail.com",

    qualification: "BE CSC",

    isMarried: true,

    age: 55

}

 

const keys = Object.keys(studentJenny);

console.log(keys);

 

const values = Object.values(studentJenny);

console.log(values);

 

console.log('======== Traversing Object ============');

 

for (const key in studentJenny) {

    if (Object.prototype.hasOwnProperty.call(studentJenny, key)) {

        const element = studentJenny[key];

        console.log(' ${key}, =>   ${element}');

    }

}

 

console.log('======== in operator ============');

console.log("age" in studentJenny );

console.log("city" in studentJenny );