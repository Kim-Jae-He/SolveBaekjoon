const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().split(' ');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().split(' ');

var a = parseInt(input[0]);

if (a <= 100 && a >= 90) {
  console.log('A');
} else if (a < 90 && a >= 80) {
  console.log('B');
} else if (a < 80 && a >= 70) {
  console.log('C');
} else if (a < 70 && a >= 60) {
  console.log('D');
} else if (a < 60 && a >= 0) {
  console.log('F');
}
