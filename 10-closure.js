var globalVariable = 400;
function outer(){
    var outerVariable = 100;
    var inner = function(){
        var innerVariable = 200;
        console.log(innerVariable);
        console.log(outerVariable);
        console.log(globalVariable);
    }
    return inner;
}
let result = outer();
result();