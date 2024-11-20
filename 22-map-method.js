const array = [3, 6, 2, 1, 9, 4];
//            [9, 36, 4, 4, 81, 16]
const arraySquare = array.map( (element) => {
    return element * element;
});
console.log(array);
console.log(arraySquare);

console.log('=========filter() method to get even numbers============');


const arrayNum = [3, 6, 2, 1, 9, 4];
const arrayEven = arrayNum.filter((element)=>{
return element%2==0;
})
console.log(arrayEven);

console.log('===========reduce()==========');


const arrayNumber = [3,6,2,1,9,4];
 const sum =arrayNumber.reduce ((runningTotal,element)=>{
    return runningTotal + element;
}, 0);
console.log(sum);

console.log(` ========= Average mark ============ `);
const arrayMarks = [90, 60, 89, 80, 56, 45 ];
const sumMarks = arrayMarks.reduce( (runningTotal, element) => {
    return runningTotal + element;
}, 0);
console.log(sumMarks);
console.log(` Average marks is ${sumMarks/arrayMarks.length } `);

console.log(`======= flat() =========`);
const arrayN = [3, 6, [ 2, 1, [ 77, 88 ], 0 ], 9, 4]; 
const newArray = arrayN.flat(1);
console.log(newArray);

console.log(`====== Array with empty slots =========`);
const arrayNN = [3, 6, , 99, , , 4]; 
console.log(arrayNN.length);
console.log(arrayNN);
const arrayWithoutEmptySlots = arrayNN.flat();
console.log(arrayWithoutEmptySlots);
console.log(arrayWithoutEmptySlots.length);