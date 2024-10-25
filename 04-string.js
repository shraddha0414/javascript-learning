var greet = "Good Morning";
console.log("Given String is:  ", greet, " and it's length is: ", greet.length);

// ES6 - String Template
// ${} - Variable substitution
console.log(`Given String is: ${greet}, and it's length is: ${greet.length}`);

var charAtIndex0 = greet.charAt(0);
console.log(`Character at index 0 is : ${charAtIndex0}`);

var charAtIndex7 = greet.charAt(7);
console.log(`Character at index 7 is : ${charAtIndex7}`);

var charAtLastIndex = greet.charAt(greet.length-1);
console.log(`Character at last index is : ${charAtLastIndex}`);

var firstName = "Elon";
var lastName = " Musk";
var concatResult = firstName.concat(lastName);
console.log(` Concat result: ${concatResult}`);