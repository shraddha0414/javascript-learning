console.log("======== 2. Declaration and Initialization ==================");

var age;

age = 20;

console.log(age);

 

let city;

city = "Pune";

console.log(city);

 

const isMarried = true;

 

console.log("======== 2. Re-declaration ==================");

var age = 30;

console.log(age);

// let city = "Mumbai";

// const isMarried = true;

 

console.log("======== 3. Scope ==================");

function demo(){

    var n1 = 10;

    let n2 = 20;

    const n3 = 30;

    console.log(n1, n2, n3);

    if(n1>=10){

        var n4 = 50; // Function Scope 

        let n5 = 60; // Block Scope 

        const n6 = 70; // Block Scope 

        console.log(n4, n5, n6);

    }

    console.log(n4);

    //console.log(n5);

   // console.log(n6);

 

}

demo();

// console.log(n1, n2, n3);