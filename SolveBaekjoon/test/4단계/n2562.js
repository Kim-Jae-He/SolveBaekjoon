const fs = require('fs');

//백분제출용
// const input = fs.readFileSync('dev/stdin').toString().split('\n').map(x => Number(x));

//문제 풀이용
const input = fs.readFileSync('example.txt').toString().split('\n');

let num = Number(input[0]);

let max = 0;

for (let i = 1; i < 9; i++) {
  if (num < input[i]) {
    num = input[i];
    max = i;
  }
}

console.log(num);
console.log(`${max + 1} `);
