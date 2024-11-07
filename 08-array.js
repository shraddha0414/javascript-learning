let ageList = [ 20, 21, 24, 29, 19, 21, 24, 23 ];

console.log(ageList);

 

console.log(`Length of the array is: ${ageList.length}`);

 

console.log("====== Accessing the element using index ==============");

let elementAtIndex2 = ageList[2];

console.log(elementAtIndex2);

 

let arrayLength = ageList.length;

const lastElement = ageList[arrayLength-1];

console.log(lastElement);

console.log("========= Update the element in array ==========");

let array = [10, 20, 40, 30, 10, 60];

console.log(array);

array[1] = 700;

console.log(array);

 

array[ array.length-1 ] = 900;

console.log(array);


console.log("========= indexOf() method ==========");

let arrayNumbers = [10, 20, 40, 30, 10, 60];

const indexOf40 = arrayNumbers.indexOf(40);

console.log(indexOf40);

 

console.log(`Index of 900 : ${arrayNumbers.indexOf(900)}`);