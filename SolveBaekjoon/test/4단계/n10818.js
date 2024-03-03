const fs = require('fs');

//백준제출용
// const input = fs.readFileSync('dev/stdin').toString().split('\n');

//문재풀이용
const input = fs.readFileSync('example.txt').toString().split('\n');

let cnt = Number(input[0]);

let n = input[1].split(' ');

const numbers = n.map((e) => Number(e));

let max = numbers[0];

let min = numbers[1];

for (let i = 1; i < cnt; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}
console.log(`${min} ${max}`);
