let array = [10, 20, 40, 30, 10, 60];
array.forEach((currentValue, index, arr)=>{
    console.log(currentValue, index, arr); // 20  1  [10, 20, 40, 30, 10, 60]  
});

console.log(`========= forEach() with Mandatory arguments==================`);

array.forEach((element) => {
    console.log(element);
});


console.log("======= Find Even Numbers ===========");
const arrayNum = [10, 23, 40, 77, 90, 70];
arrayNum.forEach( (element) => {
    if (element%2 == 0) {
        console.log(element);   
    }
} );

console.log("====== Traversing over Set=========");
let mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(50);
// console.log(mySet);
mySet.forEach(element => {
    console.log(element);
    
});

console.log("====== Traversing over Map Collection =========");
const myMap = new Map();
myMap.set(11, "Jenny");
myMap.set(22, "Elon");
myMap.set(33, "Stew");
myMap.set(44, "Bill");
myMap.set(22, "Sundar");
myMap.set(55, "Stew");

myMap.forEach((value, key) => {
    console.log(`${key} => ${value}`);
});