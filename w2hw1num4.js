// case 1 add case 2 subtract case 3 multiply case 4 divide case 5 exit 0, 6-9 "invalid option"

let prompt = require("prompt-sync")();
console.log("Please Enter a number between 1-5: ");
console.log("1: Addition(+) 2: Subtraction(-) 3: Multiplication(*) 4: Divide(/) 5: Exit ");
let enterUserInput = prompt(" Enter a number 1-5 to continue ");
let userFirstNumber = prompt(" Enter your first number: ");
let userSecondNumber = prompt(" Enter your second number: ");
// userFirstNumber = Number
console.log(userFirstNumber);
// userSecondNumber = Number
console.log(userSecondNumber);
let addition = (+userFirstNumber) + (+userSecondNumber)
let subtract = (userFirstNumber - userSecondNumber)
let multiply = (userFirstNumber * userSecondNumber)
let divide = (userFirstNumber / userSecondNumber)

if (6>enterUserInput){

switch (enterUserInput) {
  case "1": {
        console.log(addition);
    break;
  }
  case "2": {
    console.log(subtract);
    break;
  }
  case "3": {
    console.log(multiply);
    break;
  }
  case "4": {
    console.log(divide);
    break;
  }
  case "5": {
    console.log("You have exited the calculator");
    break;
  }
  default: {
    console.log("Invalid Option");
    break;
  }
}

}
else if (6<= enterUserInput) 
{
    console.log("Invalid Option Please Retry With 1-5 for the Caclulator");
}

else 
{
    console.log("Invalid Option You have exited the calculator Please Retry");
}