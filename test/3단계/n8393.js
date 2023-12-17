const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString();

//문제풀이용
const input = fs.readFileSync('example.txt').toString();

let num = Number(input);
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log(sum);
