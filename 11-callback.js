// Jenny Student
function homeWorkJenny(callback){
    console.log("She had dinner....");
    console.log(`She started her homework... `);
    console.log('After sometime. She has completed her homework.....'); 
    console.log("Jenny posted her homework in whats app group...");
    callback();
}

// Elon Student
let copyHomeWorkElon = function(){
    console.log('When Jenny callback.');
    console.log("He will come and start copying home work...");
    console.log("Complete homework....");
    console.log("Elon posted output in what app group."); 
}

homeWorkJenny(copyHomeWorkElon);


console.log("=======================");

let greet = function(){
    console.log('Hey Good Evening');  
}
setTimeout(greet, 7000);

// setTimeout(function(){
//     console.log('Hey Good Evening');  
// }, 7000);

// 1 hr = 60 mins
// 1 mins = 60 sec
// 1 sec = 1000 ms
// 8 sec = 8000 ms

console.log('========= Callback Hell =============');
setTimeout(function(){
    console.log("Hello.. ");
    setTimeout(function(){
        console.log("Good Evening...");
        setTimeout(function(){
            console.log("Good night...");

        }, 9000);
    }, 7000);
}, 5000);