function reverseStr(str){
    return str.split("").reverse().join("")
}
console.log(reverseStr("Hello"));


function checkPalindrome(str) {
    let originalStr = str;
    let lowerCasedStr = originalStr.toLowerCase();
    let reversed = lowerCasedStr.split("").reverse().join("");
    return lowerCasedStr === reversed;
}
console.log(checkPalindrome("Amma"));


