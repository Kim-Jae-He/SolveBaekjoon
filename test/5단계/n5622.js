const fs = require('fs');

try {
  //문제풀이용
  //const input = fs.readFileSync('answer/n5622.txt').toString().trim().split('');

  //백준제출용
  let input = fs.readFileSync('dev/stdin').toString().trim().split('');

  let sum = 0;

  for (i = 0; i < input.length; i++) {
    let str = input[i];
    if (str == 'A' || str == 'B' || str == 'C') {
      sum += 3;
    } else if (str == 'D' || str == 'E' || str == 'F') {
      sum += 4;
    } else if (str == 'G' || str == 'H' || str == 'I') {
      sum += 5;
    } else if (str == 'J' || str == 'K' || str == 'L') {
      sum += 6;
    } else if (str == 'M' || str == 'N' || str == 'O') {
      sum += 7;
    } else if (str == 'P' || str == 'Q' || str == 'R' || str == 'S') {
      sum += 8;
    } else if (str == 'T' || str == 'U' || str == 'V') {
      sum += 9;
    } else if (str == 'W' || str == 'X' || str == 'Y' || str == 'Z') {
      sum += 10;
    }
  }

  console.log(sum);
} catch (err) {
  console.log(err.message);
}
