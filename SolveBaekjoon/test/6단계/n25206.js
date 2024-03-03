const readline = require("readline");
const fs = require("fs");

try {
  //문제풀이용
//   const rl = readline.createInterface({
//     input: fs.createReadStream("SolveBaekjoon/answer/level6/n25206.txt"),
//     output: process.stdout,
//     terminal: false,
//   });

  //백준제출용
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
  });

  let sum = 0;
  let total = 0;

  const table = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
  };

  rl.on("line", (line) => {
    const [sub, score, grade] = line.trim().split(" ");

    if (grade !== "P") {
      sum += Number(score) * table[grade];
      total += Number(score);
    }
  });

  rl.on("close", () => {
    if (total !== 0) {
      const result = sum / total;
      console.log(result);
    } else {
      console.log("총 학점이 0입니다.");
    }
  });
} catch (err) {
  console.log(err.message);
}
