const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];


console.log("First element:", fruits_seasonal[0]);
console.log("Last element:", fruits_seasonal[fruits_seasonal.length - 1]);


fruits_seasonal.unshift("Papaya");
console.log("After adding Papaya:", fruits_seasonal);


const mangoIndex = fruits_seasonal.indexOf("Mango");
if (mangoIndex > -1) {
  fruits_seasonal.splice(mangoIndex, 1);
}
console.log("After removing Mango:", fruits_seasonal);


fruits_seasonal.push("Pineapple");
console.log("After adding Pineapple:", fruits_seasonal);


const waterMelonIndex = fruits_seasonal.indexOf("Water Melon");
if (waterMelonIndex > -1) {
  fruits_seasonal.splice(waterMelonIndex, 0, "Dragon Fruit");
}
console.log("After inserting Dragon Fruit:", fruits_seasonal);


const orangeIndex = fruits_seasonal.indexOf("Orange");
if (orangeIndex > -1) {
  fruits_seasonal[orangeIndex] = "Kiwi";
}
console.log("After replacing Orange with Kiwi:", fruits_seasonal);


console.log("Elements from index 1 to 4:", fruits_seasonal.slice(1, 5));


console.log("Last 3 elements:", fruits_seasonal.slice(fruits_seasonal.length - 3));
