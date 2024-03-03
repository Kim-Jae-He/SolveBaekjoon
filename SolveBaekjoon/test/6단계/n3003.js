const fs = require("fs");

try {
  //문제풀이용
  const input = fs
    .readFileSync("SolveBaekjoon/answer/level6/n3003.txt")
    .toString()
    .split(" ");

  //백준풀이용
  //const input = fs.readFileSync('dev/stdin').toString().split(' ');

  let king = input[0];
  let queen = input[1];
  let look = input[2];
  let besup = input[3];
  let knight = input[4];
  let pawn = input[5];

  console.log(1 - king, 1 - queen, 2 - look, 2 - besup, 2 - knight, 8 - pawn);
} catch (err) {
  console.log(err.message);
}
