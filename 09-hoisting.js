console.log(age);

var age;

 

// console.log(city);

// const city = "Pune";

 

console.log(`Named function is hoisted `);

 

show();

function show(){

    console.log("Inside show function....");

}

 

console.log(`Function expression never hoisted`);

// demo();

var demo = function(){

    console.log("Inside function expression"); 

}

demo();