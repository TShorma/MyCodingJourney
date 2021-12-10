// 1 write a function declaration to calculate the area of a circle when given the radius 
// 2 write a function expression to calculate the third side of a triangle when given the value of the first two sides
// 3 give an example of hoisting

//1
let prompt = require("prompt-sync")();
console.log("Area of Circle Calculator");
// let radius = prompt("Enter the radius: ");
let a = prompt("Enter the side: ");

function areaCircle(num) {
    return Number(num*num*3.14)
}
circle
console.log(areaCircle(radius));   //My argument go here
square
function areaSquare(side) {
    return side*side
}
console.log(areaSquare(a));

//2
let a = prompt("Enter the a side: ");
let b = prompt("Enter the b side: ");

function pytha (side1, side2){
    return Number(Math.sqrt((side1**2)+(side2**2)))
}
console.log(pytha(a, b));

//3
let num1 = prompt("Enter the a side: ");
let num2 = prompt("Enter the b side: ");
function sub (a, b) {
    return b - a
}
console.log(sub(num1, num2));