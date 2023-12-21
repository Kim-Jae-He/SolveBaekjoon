const fs = require('fs');

try {
  //문제풀이용
  const input = fs.readFileSync('answer/n2675.txt', 'utf-8').trim().split('\n');
  //백준제출용
  //const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

  const count = Number(input[0]);

  for (let i = 1; i <= count; i++) {
    const [repeat, str] = input[i].trim().split(' ');
    const result = str
      .split('')
      .map((char) => char.repeat(repeat))
      .join('');
    console.log(result);
  }
} catch (err) {
  console.error(err.message);
}
