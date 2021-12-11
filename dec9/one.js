//1
const horror = ['Freddy', 'Jason', 'Michael', 'Ghostface', 'Chucky'];

const fourthItem = horror[3]
console.log()

//2
const  netflixShows = ["Orange is the New Black", "Black Mirror", "Chewing Gum"];

netflixShows.push("The Flash")

console.log(netflixShows)

//2.2
let countDown = 10;

const myArray = ["1","2","3","4","5","6","7","8","9","10"];
for (let i = 0; i < myArray.length; i++) {
  countDown--
}
console.log(countDown)

//3
// 1.
// Loop through the synonyms array. Each time, push a string into the greetings array. 
// The string should have the format 'Have a [synonym] day!'
// ADD CODE HERE
for (let i=0; i< synonyms.length; i++){
    greetings.push("Have a "+[synonyms[i]]+" day!")
  }
  // 2. 
  // Loop through the greetings array, logging each greeting to the console:
  // 'Have a fantastic day!'
  // 'Have a wonderful day!'
  // 'Have a great day!'
  // ADD CODE HERE
  for (let j=0; j< greetings.length; j++){
    
    console.log(greetings[j])
  }

//4
