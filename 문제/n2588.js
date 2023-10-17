const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().split('\n');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().split('\n');

const [a, b] = input;
const [q, w, e] = b;

console.log(a * b[2]);
console.log(a * b[1]);
console.log(a * b[0]);
console.log(a * b);
