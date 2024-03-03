const fs = require('fs');

try {
  // 입력 파일의 내용을 문자열로 읽어옴
  //const input = fs.readFileSync('/dev/stdin').toString().trim();

  //문제풀이용
  let input = fs.readFileSync('answer/n11654.txt').toString().trim();

  // 입력 문자열의 첫 번째 문자의 ASCII 코드 값을 출력
  console.log(input.charCodeAt(0));
} catch (err) {
  console.log(err.message);
}
