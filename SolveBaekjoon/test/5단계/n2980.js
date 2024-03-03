const fs = require('fs');

try {
  //문제확인용
  let input = fs.readFileSync('answer/n2980.txt').toString().split(' ');

  //백준제출용
  //let input = fs.readFileSync('/dev/stdin').toString().split(' ');

  let num1 = Number(input[0].split('').reverse().join(''));
  let num2 = Number(input[1].split('').reverse().join(''));

  console.log(num1 > num2 ? num1 : num2);
} catch (err) {
  console.log(err.message);
}
