// Number 1
function solution(str)
{
let reversed = ""
for(let i =str.length-1; i>= 0; i--)
{
    reversed+=str[i]
}
return reversed;
}
// Number 2
function getCount(str) 
{
    var vowelsCount = 0;
    let vowels = ["a","e","i","o","u"]
    for (let i=0; i<vowels.length; i++){
      for (let j=0; j<str.length; j++){
        if (vowels[i] === str[j]){
          vowelsCount++       
        }
      }
    }
    return vowelsCount;
}