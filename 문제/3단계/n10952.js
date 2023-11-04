const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

//문제풀이용

const input = fs.readFileSync('example.txt').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  let sum = input[i].split(' ');
  // console.log(sum);
  a = Number(sum[0]);
  b = Number(sum[1]);
  if (a == 0 && b == 0) {
    break;
  }
  console.log(a + b);
}
