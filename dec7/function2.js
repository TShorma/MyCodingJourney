let prompt = require("prompt-sync")();
console.log("Please Enter a number between 1-5: ");
console.log("1: Addition(+) 2: Subtraction(-) 3: Multiplication(*) 4: Divide(/) 5: Exit ");
let enterUserInput = prompt(" Enter a number 1-5 to continue ");
let userFirstNumber = prompt(" Enter your first number: ");
let userSecondNumber = prompt(" Enter your second number: ");
console.log("Your first number is: " + userFirstNumber);
console.log("Your secound number is: " + userSecondNumber);

function addition() {
    return (+userFirstNumber) + (+userSecondNumber)
}
function subtract() {
    return (userFirstNumber - userSecondNumber)
}
function multiply() {
    return (userFirstNumber * userSecondNumber)
}
function divide() {
    return (userFirstNumber / userSecondNumber)
}

switch (enterUserInput) {
  case "1": {
    console.log(addition());
    break;
  }
  case "2": {
    console.log(subtract());
    break;
  }
  case "3": {
    console.log(multiply()); 
    break;
  }
  case "4": {
    console.log(divide());
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