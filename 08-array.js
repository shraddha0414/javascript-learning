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


console.log('=========== Traversing Array ===============');
let arrayNum = [10, 20, 40, 30, 10, 60];
// index start 0,   arrayNum.length
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element);  
}

console.log('=========== Traversing Array in reverse order ===============');
for (let index = arrayNum.length-1; index >= 0; index--) {
    const element = arrayNum[index];
    console.log(element); 
}

console.log("======== Insertion in the start and end of an array==============");
let arrayN = [10, 20, 40, 30, 10, 60];
console.log(`Array before insertion`);
console.log(arrayN);
arrayN.unshift(90);
console.log(`Array After insertion at start`);
console.log(arrayN);

console.log(`Array After insertion at the end`);
arrayN.push(777);
console.log(arrayN);

console.log("======== Deletion in the start and end of an array==============");
let arrayList = [10, 20, 40, 30, 10, 60];
arrayList.shift();
arrayList.pop();
console.log(arrayList);

console.log('============ slice() ================');
let arrayL = [10, 20, 40, 30, 10, 60];
const sliceElements = arrayL.slice(1, 4);
console.log(sliceElements);
const sliceElements2 = arrayL.slice(2);
console.log(sliceElements2);

console.log('============ splice() Insertion without deleting any elements ================');
let list = [10, 20, 40, 30, 10, 60];
console.log('Before Insertion');
console.log(list);
list.splice(2, 0, 800);
console.log('After Insertion');
console.log(list);

console.log('============ splice() Insertion by deleting some elements ================');
let listArray = [10, 20, 40, 30, 10, 60];
console.log(listArray);
listArray.splice(1, 1, 900, 700);
console.log(listArray);
console.log('************************');
let listArr = [10, 20, 40, 30, 10, 60];
console.log(listArr);
listArr.splice(1, 3, 777, 999);
console.log(listArr);

console.log('============ splice() to delete elements ================');
let listArrayOne = [10, 20, 40, 30, 10, 60];
console.log(listArrayOne);
listArrayOne.splice(3, 1);
console.log(listArrayOne);


console.log("========== for in loop==============");

let listArrayTwo = [10, 20, 40, 30, 10, 60];

for (const index in listArrayTwo) {

    const element = listArrayTwo[index];

    console.log(element);

}

 

console.log("========== for of loop==============");

let listArrayThree = [10, 20, 40, 30, 10, 60];

for (const element of listArrayThree) {

    console.log(element);

}

console.log("========== join() ==============");

let listArrayFour = [10, 20, 40, 30, 10, 60];

const joinedElements = listArrayFour.join(",");

console.log(joinedElements);

console.log(typeof joinedElements);