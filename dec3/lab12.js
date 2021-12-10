let prompt = require('prompt-sync') ()
let str = prompt('Enter a String:')
let str2 = str;

const flip = function () {
    for( i=str.length -1; i>=0; i--){
        i +=str.charAt(i) 
    }
    console.log(i);
}
if(str2 == flip){
    console.log(str +" and " + " are palindrome strings");
}
else {
    console.log(str +" and "+ " are not palindrome strings");
}