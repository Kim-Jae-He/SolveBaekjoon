const fs = require('fs');

try {
  //백준제출용
  //const input = fs.readFileSync('/dev/stdin).toString();

  //문제풀이용
  const input = require('fs').readFileSync('answer/n10809.txt').toString();
  let answer = [];

  for (i = 97; i <= 122; i++) {
    answer.push(input.indexOf(String.fromCharCode(i)));
  }

  console.log(answer.join(' '));
} catch (err) {
  console.log(err.message);
}
