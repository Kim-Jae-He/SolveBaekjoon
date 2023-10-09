const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim();

//문제풀이용
const input = fs.readFileSync('example.txt').toString().trim();

let year = input;
let twain = 543;

console.log(year - twain);
