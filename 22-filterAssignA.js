const arrayNumbers =[20,11,40,25,37,49,9,90,60,2,19]
console.log('======= Given array  ===========');
console.log(arrayNumbers);

console.log('======= Numbers greater then 50  ===========');

const greaterThan50 = arrayNumbers.filter(num => num > 50);

console.log(greaterThan50); 


console.log("=======Even Numbers ===========");
arrayNumbers.forEach( (element) => {
    if (element%2 == 0) {
        console.log(element);   
    }
} );

console.log("======= Odd Numbers ===========");
arrayNumbers.forEach( (element) => {
    if (element%2 !== 0 ) {
        console.log(element);   
    }
} );


console.log("======= Numbers Multiple by 5  ===========");
arrayNumbers.forEach( (element) => {
    if (element%5 === 0 ) {
        console.log(element);   
    }
} );


console.log("======= Numbers between 20 and 50 ===========");
const numbersBetween20And50 = [];

arrayNumbers.forEach(num => {
  if (num > 20 && num < 50) {
    numbersBetween20And50.push(num);
  }
});

console.log(numbersBetween20And50);