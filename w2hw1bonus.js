let prompt = require("prompt-sync")();
let userString = prompt("Enter a string here: ")
let userUpperString = userString.charAt(0).toUpperCase() + userString.slice(1);
console.log(userUpperString);