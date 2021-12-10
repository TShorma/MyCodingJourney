// Fuction expressions is not a hoisted as its a variable
// Fuction expressions are not hoisted
const functionExpression = function (x,y) {
    // Anonymous function
    console.log(x*y);
    return x*y
}
functionExpression(2,3)

// Function declarations are hoisted
// hoisting top to bottom the variable should be inizilized before you use it
// This means that you can use them before they are declared
function add(x,y) {
    console.log(x+y);
}
add(12,3)