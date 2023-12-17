const fs = require('fs');

//백준 문제제출
//const input = fs.readFileSync('dev/stdin').toString().trim();

//문제풀이용
const input = fs.readFileSync('answer/example.txt').toString().trim();

let a = input[0].toString();

let b = Number(input[1]);

console.log(a[b - 1]);
