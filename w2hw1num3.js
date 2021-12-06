let prompt = require("prompt-sync")();
let userString = prompt("Enter your sentence here: ").split(" ");
console.log(userString);
let wordFinder = prompt("What word are you looking for? : ");
let counter = 0;

for (let index = 0; index < userString.length; index++) 
{
    if (wordFinder.toLowerCase() == userString[index].toLowerCase()) 
    {
    counter++;
    }
}

console.log("The word " + wordFinder + " comes up " + counter + " times");
console.log(counter);