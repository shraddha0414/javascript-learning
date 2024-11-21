

console.log('=====================');

function isPalindrome(str) {
    
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
   
    return cleanedStr === cleanedStr.split('').reverse().join('');
}


console.log(isPalindrome("madam")); 

console.log(isPalindrome("dad"));   

console.log(isPalindrome("hello")); 



function areAnagrams(str1, str2) {
    
    const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');

    return cleanStr1 === cleanStr2;
}
console.log('=====================');



console.log(areAnagrams("Silent", "Listen")); 
console.log(areAnagrams("Hello", "World"));   
console.log(areAnagrams("Such", "Much"));     
console.log('=====================');