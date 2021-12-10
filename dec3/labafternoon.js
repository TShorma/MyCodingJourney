let prompt = require("prompt-sync")();
// let color = ["red", "blue"]
// let addColor = (prompt("Enter Your Fav Color:"));
// let userColor =""
let userColor = []
// let notFavColor = color.pop()
// console.log(notFavColor);
// console.log(color);
// color.push("green", "yellow", "black")

// used to populate the array with new elements
for(j=1; j<=3; j++)
{
    
    // userColor += (prompt("Enter Your Fav Color:"));
    userColor.push((prompt("Enter Your Fav Color:")))
    console.log(userColor);
}
// used to display the array of the elements
// for(i=0; i<color.length; i++)
// {
//     console.log(color[i]);
// }