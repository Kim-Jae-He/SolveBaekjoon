const fs = require('fs');

try {
  //문제풀이용
  const input = fs.readFileSync('answer/level6/n10988.txt').toString().trim();

  //백준제출용
  //const input = fs.readFileSync('dev/stdin').toString().trim();

  console.log(input === input.split('').reverse().join('') ? 1 : 0);
} catch (err) {
  console.log(err.message);
}
