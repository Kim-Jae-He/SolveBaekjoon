const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().split(' ');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().split(' ');

const a = input[0];
const b = input[1];
const c = input[2];

console.log(a);
console.log(b);
console.log(c);


console.log(Number(a) + Number(b) + Number(c));