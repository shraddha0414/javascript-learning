// Jenny Student
function homeWorkJenny(callback){
    console.log("She had dinner....");
    console.log(`She started her homework... `);
    console.log('After sometime. She has completed her homework.....'); 
    console.log("Jenny posted her homework in whats app group...");
    callback();
    let completeHomeWork = function(){
        console.log("Hey Finally we both have completed homework...");  
        console.log("======= completeHomeWork =======");  
    }
    console.log("======= homeWorkJenny =======");
    return completeHomeWork;
}
// Elon Student
let copyHomeWorkElon = function(){
    console.log('When Jenny callback.');
    console.log("He will come and start copying home work...");
    console.log("Complete homework....");
    console.log("Elon posted output in what app group."); 
    console.log("======= copyHomeWorkElon =======");
    
}

let result = homeWorkJenny(copyHomeWorkElon);
result();