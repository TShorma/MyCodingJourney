// let prompt = require('prompt-sync') ()
// let num = prompt('enter a number:')
// console.log(num);

//1
//22
//333
//4444
//55555

let i = 0;
while (i <= 1) {
console.log("- 1");
i++;
let j = 0;
while (j <= 2) {
console.log("-- 2");
j++;
let k=0;
while (k<=3) {
console.log("---3");
k++;
let l=0;
while (l<=4) {
console.log("----4");
l++
let m=0;
while (m<=5) {
console.log("-----5");
m++;
}
}
}
}
}
// column is depdendent on row. column on current row is depdneding 
// second row is 2
// third row is 3
// as current row increases that many columns you have
for (r=0; r<=5; r++) {
for (c=0; c<r; c++)
process.stdout.write(r.toString())
//process.stdout.write(r.toString())
// takes out the space
console.log(r)
// this was only to show without 
// the process.stdout.write(r.toString())
}
//1
//12
//123
//1234
//12345
for (r=1; r<=5; r++) {
for (c=1; c<=r; c++) {
process.stdout.write(c.toString())
}
console.log();
}

//proporties dont have () and methods do have ()