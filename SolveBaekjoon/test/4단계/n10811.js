const fs = require('fs');

//백준 제출용
//const input = fs.readFileSync('dev/stdin').toString().split('\n');

//문제풀이
const input = fs.readFileSync('example.txt').toString().split('\n');

let [N, M] = input[0].split(' ').map((n) => parseInt(n));
let basket = [];
for (let i = 1; i <= N; i++) {
  basket.push(i);
}

for (let i = 1; i <= M; i++) {
  let [a, b] = input[i].split(' ').map((n) => parseInt(n));
  let arr = [];
  for (let j = a - 1; j < b; j++) {
    arr.push(basket[j]);
  }
  arr.reverse();
  basket.splice(a - 1, b - a + 1, ...arr);
}
console.log(basket.join(' '));
