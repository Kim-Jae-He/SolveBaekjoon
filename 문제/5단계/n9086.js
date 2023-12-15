const fs = require('fs');

//백준제출용
//const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

//문제풀이용
const input = fs.readFileSync('answer/n9086.txt').toString().trim().split('\n');

// 테스트의 개수 T
const T = Number(input[0]);

// 각 테스트에 대한 처리
for (let i = 1; i <= T; i++) {
  const test = input[i].trim();

  const first = test[0];
  const last = test[test.length - 1];

  console.log(first + last);
}
