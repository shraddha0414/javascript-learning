var n1 = 10; 

var n2 = 5;

 

var result = n1 + n2;

console.log(`Addition (+) is: ${result} `);

 

var result = n1 - n2;

console.log(`Subtraction (-) is: ${result} `);

 

var result = n1 * n2;

console.log(`Multiplication (*) is: ${result} `);

 

var result = n1 ** n2;

console.log(`Exponential (**) is: ${result} `);

 

var result = n1 / n2; // 10/5

console.log(`Division (/) is: ${result} `);

 

var result = n1 % n2; // 10 % 5

console.log(`Modulus (%) is: ${result} `);

console.log("Comparison Operator");

var n1 = 10; var n2 = 20; var n3 = 10;

 

var result = n1>n2;

console.log(`Greater than operator (>): ${result}`); // false

 

var result = n1>n3;

console.log(`Greater than operator (>): ${result}`); // false

 

var result = n1>=n3;

console.log(`Greater than equal operator (>=): ${result}`); // true

 

var result = n1<n3;

console.log(`Less than operator (<): ${result}`); // false

 

var result = n1<=n3; // 10 <= 10

console.log(`Less than equal operator (<=): ${result}`); // true

console.log(`What is difference between == and === (Strictly equal)`);

var n1 = 10; var n2 = "10"; var n3 = 20;

 

var result = n1 == n3; // 10 == 20

console.log(`Double equal == Operator: ${result}`); // false

 

var result = n1 == n2; // 10 == "10"

console.log(`Double equal == Operator: ${result}`); // true

 

var result = n1 === n2; // 10 === "10"

console.log(`Triple equal or strictly equal === Operator: ${result}`); // false