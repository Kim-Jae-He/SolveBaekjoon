const fs = require('fs');

//백준제출용
//const input = fs.readFileSync('dev/stdin').toString().split('\n');

//문제 풀이용
const input = fs.readFileSync('example.txt').toString().split('\n');

const num = input[0] * 1;
const score = input[1].split(' ');

const max = Math.max(...score);
let sum = 0;

for (let i = 0; i < num; i++) {
  sum += (score[i] / max) * 100;
}

console.log(sum / num);
