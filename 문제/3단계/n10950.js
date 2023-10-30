const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().split('\n');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().split('\n');

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let score = input[i].split(' ');
  console.log(Number(score[0]) + Number(score[1]));
}
