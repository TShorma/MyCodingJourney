// 1
const hw = (name) => "Hello World " + name;
// console.log(hw("Tushar"));
document.getElementById("hwtushar").innerHTML = "Hello World Tushar";

// 2
// Takes a temperature is hot (above 72) or
// cold (below 40). Call the function with an arbitrary temperature.

const temp = (degree) => {
  if (degree >= 78) {
    console.log("Temperature is hot");
  } else if (degree < 72) {
    console.log("Temperature is between 39-71");
  } else if (degree > 40) {
    console.log("Temperature is cold");
  }
};
temp(20)