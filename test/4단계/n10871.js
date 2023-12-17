const fs = require('fs');

//백준 제출용
//const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().trim().split('\n');


const [N, X] = input[0].split(' ').map(Number);

const number = input[1].split(' ').map(Number);

const result = number.filter((num )=> num < X).join(' ');

console.log(result);