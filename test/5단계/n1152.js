const fs = require('fs');

try {
  //문제풀이용
  //const input = fs.readFileSync('answer/n1152.txt').toString();

  //백준풀이용
  const input = fs.readFileSync('dev/stdin').toString();

  const word = input.trim().split(' ');

  let total = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] !== '') {
      total++;
    }
  }
  console.log(total);
} catch (err) {
  console.log(err.message);
}
