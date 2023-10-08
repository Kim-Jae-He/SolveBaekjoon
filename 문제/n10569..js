 const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().split(' ');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().split(' ');

var A = parseInt(input[0]);
var B = parseInt(input[1]);
console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(parseInt(A / B));  //결과가 정수값이 나와야하기때문에 parseInt()를 사용했습니다
console.log(A % B);


