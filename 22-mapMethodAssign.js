const arrayNumbers =[20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19]
console.log(arrayNumbers);
console.log('======================== After adding 10 to each element =============================');

const updatedNumbers = arrayNumbers.map(element => element + 10);
console.log(updatedNumbers);

console.log('======================== Cube of the each element =============================');

const cubedNumbers = arrayNumbers.map(element => element ** 3);
console.log(cubedNumbers);


console.log('======================== Adding index to its corresponding value =============================');
const indexedNumbers = arrayNumbers.map((element, index) => element + index);

console.log(indexedNumbers);