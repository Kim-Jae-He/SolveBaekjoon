const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().split('\n');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().split('\n');

let a = Number(input[0]);
let answer = '';

for (let i = 1; i <= a; i++) {
    let num = input[i].split(' ');
    answer += Number(num[0]) + Number(num[1]) + '\n';
}
console.log(answer);