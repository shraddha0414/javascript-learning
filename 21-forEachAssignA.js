

const arrayNumbers= [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log('=========================== Elements with index ======================');
arrayNumbers.forEach((element, index) => {
    console.log(`Element ${element} : index ${index}`);
  });
  
console.log('===========================Positive Numbers in the array======================');

  const positiveNumbers = arrayNumbers.filter(num => num > 0);
console.log(positiveNumbers);


console.log('=====================Negative Numbers in the array===========================');
const negativeNumbers = arrayNumbers.filter(num => num < 0);
console.log(negativeNumbers);

console.log("=============================Find Even Numbers ============================");
arrayNumbers.forEach( (element) => {
    if (element%2 == 0) {
        console.log(element);   
    }
} );


console.log('=======================Sum of the array elements========================');

 const sum = arrayNumbers.reduce ((runningTotal,element)=>{
    return runningTotal + element;
}, 0);
console.log(sum);

console.log('=======================Even Indexed elements value========================');

arrayNumbers.forEach((element, index) => {
    if (index % 2 === 0) {
      console.log(`Even indexed element at index ${index}: ${element}`);
    }
  });
  
  