const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().split('\n');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(' ');

  console.log(`Case #${i}: ${Number(numbers[0]) + Number(numbers[1])}`);
}