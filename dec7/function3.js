// Assing defult paramenters inside the fuction 
function greet(firstName, lastName) {
    console.log("Hello " + firstName + " " +lastName);
}
// Parameters are variable names that represent values

// Arguments (When calling the function) have a value   => Passing an argument
greet("Bob", "Smith")

function happyBirthday(fName = "Sam", age = 19) {
    console.log("Happy Birthday " + fName + " you are " + age + " yours old!");
}