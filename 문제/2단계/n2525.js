const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().split('\n');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().split('\n');


let a = parseInt(input[0].split(' ')[0]);
let b = parseInt(input[0].split(' ')[1]);
let c = parseInt(input[1]);

let h = 0;
let m = 0;

h = Math.floor((a * 60 + b + c) / 60);
m = (a * 60 + b + c) % 60;
if (h >= 24) {
  h -= 24;
}
console.log(`${h} ${m}`);