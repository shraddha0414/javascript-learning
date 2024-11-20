function multiply{
    console.log(n1, n2);
    
}
multiply(4, 5, 6);
//



function divide  (x, y=1){
    console.log(x/y);
    
}
divide(20,10);
divide(5);




const fruits = ["Apple", "Mango", "Banana", "Watermelon"];

// Accessing array element using index before ES6
const fruit_apple = fruits[0];
const fruit_banana = fruits[2];
console.log(fruit_apple, fruit_banana);

// ES6 - Array destructuring
let [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);
