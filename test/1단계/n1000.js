const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().split(' ');

//문제풀이용
// 입력에 공백에 있어서 split를 사용하였습니다
const input = fs.readFileSync('example.txt').toString().split(' '); 


var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);
