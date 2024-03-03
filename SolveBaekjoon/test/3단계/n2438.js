const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString();

//문제풀이용

const input = fs.readFileSync('example.txt').toString();

const num = Number(input);
let result = '';

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    result += '*';
  }
  // 개행 처리 문자를 넣어줌으로서 별 개수를 구분할 수 있다.
  result += '\n';
}

// 모든 문자열을 이어서 입력한 뒤 한번에 출력
console.log(result);
