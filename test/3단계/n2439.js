const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString();

//문제풀이용

const input = fs.readFileSync('example.txt').toString();

const num = Number(input);
let result = '';

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num - i - 1; j++) {
    result += ' ';
  }
  for (let z = 0; z <= i; z++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);
