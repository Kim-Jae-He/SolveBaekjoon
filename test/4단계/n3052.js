const fs = require('fs');

//백준 제출용
//const input = fs.readFileSync('dev/stdin').toString().split(' ');

//문제 제출용
const input = fs.readFileSync('example.txt').toString().split('\n');

let A = input.map(Number);

let remains = A.map((e) => {
  return e % 42;
});

const num = [...new Set(remains)];
const result = num.length;

console.log(result);
