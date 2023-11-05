const fs = require('fs');

//백준 제출용
//const input = fs.readFileSync('dev/stdin').toString().split('\n');

//문제 풀이용
const input = fs.readFileSync('example.txt').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  let sum = input[i].split(' ');

  console.log(Number(sum[0]) + Number(sum[1]));
}
