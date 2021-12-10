let prompt = require('prompt-sync')()       //call back()

/*
let cat = prompt('enter a number: ')
console.log(cat);

cat = Number(cat)       //turns data type into number, turns data into number
console.log(typeof cat);
*/

let row = prompt('Enter number of rows?')
let collums = prompt('Enter number of collums?')

for(x = 1; x <= row; x++)
{
    let str="";
    for(y = 1; y <= collums; y++)
    {
        str+= '(x,y)'
    }
    console.log(str);
}