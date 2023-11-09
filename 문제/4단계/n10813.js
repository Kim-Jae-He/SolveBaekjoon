const fs = require('fs');

//백준문제 풀이용
//const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(Number);
const basket = [];

for (let i = 0; i < n; i++) {
  basket.push(i + 1);
}

for (let i = 0; i < m; i++) {
  const [I, J] = input[i + 1].trim().split(' ').map(Number);
  let temp = basket[I - 1];
  basket[I - 1] = basket[J - 1];
  basket[J - 1] = temp;
}
console.log(basket.join(' '));
