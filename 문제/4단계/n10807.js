const fs = require('fs');

//백준제출용
//const input = fs.readFileSync("dev/stdin").toString().trim().split('\n');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().trim().split('\n');

const [a, b, c] = input;

const num = b.split('').filter((e) => e === c).length;
console.log(num);
