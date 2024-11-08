let arrayOne = [10, 20, 40];

let arrayTwo = [90, 80, 20];

 

const arrayResult = arrayOne.concat(arrayTwo);

console.log(arrayResult);

 

console.log("======= Spread Operator ... ==========");

console.log(arrayOne);

console.log(...arrayOne);

 

const result =[...arrayOne, ...arrayTwo];

console.log(result);