const fs = require('fs');

try {
  //백준제출용
  //const input = fs.readFileSync('dev/stdin').toString().split('\n');

  //문제풀이용
  const input = fs.readFileSync('answer/n11720.txt').toString().split('\n');

  const oneLine = Number(input[0]);
  const twoLine = input[1].split('');
  let sum = 0;

  for (let i = 0; i < oneLine; i++) {
    sum = sum + Number(twoLine[i]);
  }

  console.log(sum);
} catch (err) {
  console.log(err.message);
}
