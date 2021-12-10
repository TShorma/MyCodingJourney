let prompt = require('prompt-sync') ()
let str = prompt('Enter a String:')
// let flip = ""
var flip2 = ""

function flip(str) {
    for(var i=str.length -1; i>=0; i--){
        flip2+=str.charAt(i)
    }
    return flip2;
} 
if(str === flip2){
    console.log(str +" and " + flip2+ " are palindrome strings");
}
else {
    console.log(str +" and "+ flip2 + " are not palindrome strings");
}
flip(str)