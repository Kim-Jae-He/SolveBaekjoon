const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString();

//문제풀이용
const input = fs.readFileSync('example.txt').toString();

const A = Number(input[0]);

for (let i = 1; i < 10; i++) {
  console.log(`${A} * ${i} = ${A * i}`);
}
