const fs = require('fs');

try {
  //문제풀이용
  //const input = fs.readFileSync('answer/level6/n1157.txt').toString().trim();

  //백준제출용
  const input = fs.readFileSync('dev/stdin').toString().trim();

  const charCount = new Map();

  for (const char of input) {
    const uppercaseChar = char.toUpperCase();

    if (charCount.has(uppercaseChar)) {
      charCount.set(uppercaseChar, charCount.get(uppercaseChar) + 1);
    } else {
      charCount.set(uppercaseChar, 1);
    }
  }

  let maxcount = 0;
  let mostA = '';

  for (const [char, count] of charCount) {
    if (count > maxcount) {
      maxcount = count;
      mostA = char;
    } else if (count === maxcount) {
      mostA = '?';
    }
  }

  console.log(mostA);
} catch (err) {
  console.log(err.message);
}
