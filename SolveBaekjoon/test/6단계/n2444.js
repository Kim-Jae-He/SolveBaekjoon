const fs = require('fs');

try {
  //문제풀이용
  const input = Number(fs.readFileSync('answer/level6/n2444.txt'));

  //백준제출용
  //const input = Number(fs.readFileSync('dev/stdin'));

  for (let i = 1; i < input; i++) {
    let blank = ' '.repeat(input - i);
    let stars = '*'.repeat(i + (i - 1));
    console.log(blank + stars);
  }

  for (let j = input; j > 0; j--) {
    let blank = ' '.repeat(input - j);
    let stars = '*'.repeat(j + (j - 1));
    console.log(blank + stars);
  }
} catch (err) {
  console.log(err.message);
}
