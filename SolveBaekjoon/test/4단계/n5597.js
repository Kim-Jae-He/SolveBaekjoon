const fs = require('fs');

//백준 문제풀이용
//const input = fs.readFileSync('dev/sdtin').toString().split('\n').map(Number);

//node로 문제풀기
const input = fs.readFileSync('example.txt').toString().split('\n').map(Number);

let n = [];

for (let i = 1; i < 31; i++) {
  if (input.includes(i)) continue;
  n.push(i);
}

n.sort((a, b) => a - b);
console.log(`${n[0]}\n${n[1]}`);
