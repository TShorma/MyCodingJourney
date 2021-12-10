let prompt = require("prompt-sync")();
let userInput = prompt("Enter any string:");
console.log("Will inform the amount of Upper Case and Lower Case Letters, along with any number & Special Characters in the string");

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

for (let x = 0; x < userInput.length; x++) 
{
  if (userInput[x] >= "A" && userInput[x] <= "Z") 
  {
    count1++;
  } 
  else if (userInput[x] >= "a" && userInput[x] <= "z") 
  {
    count2++;
  } 
  else if (userInput[x] >= "0" && userInput[x] <= "9") 
  {
    count4++;
  } 
  else 
  {
    count3++;
  }
}
console.log("Amount of Upper Case Letter in the string: " + count1);
console.log("Amount of Lower Case Letter in the string: " + count2);
console.log("Amount of Special Characters in the string: " + count3);
console.log("There are " + count4 + " Numbers in the string");