const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().trim();

//문제풀이용
const input = fs.readFileSync('example.txt').toString().trim();

//결과값이 공백이 없이 나와야하기떄문에 trim()을 써주었습니다.

var surprise = '??!';

console.log(input + surprise);
