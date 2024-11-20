const myMap = new Map();

myMap.set(11, "Jenny");

myMap.set(22, "Elon");

myMap.set(33, "Stew");

myMap.set(44, "Bill");

myMap.set(22, "Sundar");

myMap.set(55, "Stew");

console.log(myMap);

 

console.log(myMap.size);

 

console.log(`Value for the Key 44 is : ${myMap.get(44)}`);

 

console.log(`Delete the entry : ${myMap.delete(33)}`);

console.log(myMap);