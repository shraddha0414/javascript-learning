// Type 1: Function with no argument and no return type

// Function Declaration

function show(){

    console.log("Inside show function...");

    console.log("================");

}

// Function call or Invocation

show();

show();

show();

 

// Type 2: Function with argument and no return type

function square(num){

    console.log("Given number to square: ", num);

    var result = num * num;

    console.log("Square is: ", result);

    console.log("----------------------------");  

}

square(2);

square(5);

square(19);

square(190890);


// Type 3: Function with argument and return value

function multiply(n1, n2, n3){

    console.log("Given numbers: ", n1, n2, n3);

    var result = n1 * n2 * n3;

    return result;

}

var returnValue = multiply(10, 2, 2);

console.log("Multiplication is: ", returnValue);

console.log("======================");

 

var resultValue = multiply(50, 70, 80);

console.log("Multiplication is: ", resultValue);


var greet = "Good Morning";

var result = greet.split(" ");

console.log(result);

 

console.log("===== WAP to count the total number of words from the given string ====");

var sentence = "Only your activity is shown in this section. To manage activities for other users on your account, expand each section and select the management link";

var result = sentence.split(" ");

console.log(result);

console.log(result.length);


console.log("==== toUpperCase() ====");

var greet = "good morning";

var result = greet.toUpperCase();

console.log(result);

 

console.log("==== toLowerCase() ====");

var firstName = "ELon";

var result = firstName.toLowerCase();

console.log(result);

console.log("==== trim() ====");

var city = "    Pune   ";

console.log(`Total length : ${city.length}`);

var result = city.trim();

console.log(`city: ${result}, and it's length : ${result.length}`);

console.log("==== includes() ====");

var myLove = "I love only JavaScript";

var result = myLove.includes("only");

console.log(`Given string : ${myLove} and includes word only - ${result}`);

 

console.log("==== search() ====");

var myLove = "I love only JavaScript";

var result = myLove.search("only");

console.log(`Given string : ${myLove} and search word only - ${result}`);

console.log("==== slice() ====");

var myLove = "I love only JavaScript";

var result = myLove.slice(2, 6);

console.log(result);