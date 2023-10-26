const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().split(' ');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().split(' ');

var a = parseInt(input[0]);

if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
  console.log('1');
} else {
  console.log('0');
}
