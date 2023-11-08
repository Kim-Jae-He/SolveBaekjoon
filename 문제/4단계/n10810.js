const fs = require('fs');

//백준 문제풀이용
//const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

//문제 풀이용
const input = fs.readFileSync('example.txt').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let basket = Array(n + 1).fill(0);

for (let i = 0; i <= m; i++) {
  let { I, J, K } = input[i].split(' ').map(Number);
  for (let j = I; j <= J; j++) {
    basket[j] = K;
  }
}

console.log(basket.slice(1).join(' '));
