// Function
// function sum(num1, num2) {
//     return total = num1 + num2
// }
// console.log(sum(4,3));

// Arrow Function =>
const sum = (num1, num2) => {
    return total = num1 + num2
}
console.log(sum(4,3));

// More Cleaner Way
const add = (n1, n2) => n1 + n2;
console.log(add(10,20));

/* Arrow function
one liner
dont need return keyword
*/

const dog = name => name;
console.log(dog("gucci"));

const greet = (firstName = "Tushar", lastName = "Shorma") => "Hello" +" "+ firstName + " "+lastName
console.log(greet());