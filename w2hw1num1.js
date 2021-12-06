let prompt = require("prompt-sync")();
let input = prompt("Enter Any Word: ");
testPalindrome = false;

for (let flip = 1; flip < input.length; flip++) 
{
    if ( input.charAt(flip - 1).toLowerCase() == input.charAt(input.length - flip).toLowerCase() ) 
    {
    testPalindrome = true;
    console.log("The string you entered is a palindrome");
    break;
    }
    if (testPalindrome == false) console.log("The string you entered is not palindrome");
    break;
}