const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().split(' ');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().split('\n');

const [a, b] = input;
const [q, w, e] = b;

console.log(a);
console.log(b[q]);

console.log(parseInt(a) * parseInt(b[2]));
console.log(a * b[1]);
console.log(a * b[0]);
console.log(a * b);
