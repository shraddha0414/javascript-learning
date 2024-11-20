const arrayNames = ["Jenny", "Bill", "Stew", "Elon"];
console.log(arrayNames);
console.log(`Sorting in ascending order`);
arrayNames.sort();
console.log(arrayNames);
console.log(`Sorting in descending order`);
arrayNames.reverse();
console.log(arrayNames);

console.log(`Sorting array of numbers ....`);
const array = [100, 2, 7, 55, 9, 8 ];
console.log("===== Before Sorting ===== ");
console.log(array);
// array.sort();
// sort() with custom sorting logic 
array.sort( (n1, n2)=> {
    return n1 > n2 ? 1  : -1;
});
console.log(" ======= After Sorting ===== ");
console.log(array);a