const fs = require("fs");
const readline = require("readline");

//프로그래머스제출용
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


//문제풀이용
const rl = readline.createInterface({
  input: fs.createReadStream("SolveProgrammers/answer/level0/test2_1번.txt"),
  output: process.stdout,
  terminal: false,
});

let input = '';

rl.on("line", function (line) {
  input = line;
  console.log(input); // 파일에서 읽은 문자열 콘솔에 출력
}).on("close", function () {
  // 파일 읽기 완료 시 실행할 작업 추가 가능
});
