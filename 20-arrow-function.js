console.log('====  Arrow Function with no argument and no return value ==== ');
let show = () => {
    console.log(`..... Show ......`); 
}
show();

console.log(' ===== Arrow Function with arguments and no return value =====  ');
let square = (num) => {
    console.log(` Square of ${num} is ${num * num}`); 
}
square(8);

console.log(' ===== Arrow Function with arguments and return value =====  ');
let sum = (n1 ,n2, n3 )=>{
    let result = n1 + n2 + n3;
    return result;
}
let summation = sum(989, 789, 678 );
console.log(summation);