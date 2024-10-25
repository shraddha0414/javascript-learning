function stringHandsOn(){
    var str ="    Hey you are doing good,   keep it up     "
    console.log(`Given string is :${str}`);
    console.log("=======================================================");
    
    console.log(`Lenght of the string is:${str.length}`);
    console.log("=======================================================");
    str.trim();
    var result=str.trim();
    console.log(`After trim string is :${result} and lenght is:${result.length}`);
    console.log("=======================================================");
    console.log(`First char ${result.charAt(0)} and last char ${result.charAt(result.length-1)}`);
    console.log("=======================================================");
   var resultValue= result.split(" ")
   console.log(`Total words :${resultValue.length}`);
   console.log("========================================================");
    var reseultIndex=result.indexOf("good")
   console.log(`Index of word good is:${reseultIndex}`);
   console.log("========================================================");
    var resultSubstring =result.substring(22);
    console.log(`Substring starting from index 22 :${resultSubstring}`);
    console.log("=======================================================");

    var resultforUP = result.endsWith("up");
    console.log(`Does the string end with 'up' ?:${resultforUP}`);
    console.log("=======================================================");

    var resultforStart =result.startsWith("Hey");
    console.log(`Does the string start with 'Hey'?:${resultforStart}`);
    console.log("=======================================================");
    
}
stringHandsOn()
