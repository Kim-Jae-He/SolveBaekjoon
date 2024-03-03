const fs = require("fs");

try {
  //문제풀이용
  //   const input = fs
  //     .readFileSync("SolveBaekjoon/answer/level7/n2738.txt")
  //     .toString()
  //     .trim()
  //     .split("\n");

  //백준제출용
  const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n");

  const [N, M] = input[0].trim().split(" ").map(Number);

  const readMatrix = (start, numRows) => {
    return Array.from({ length: numRows }, (_, i) =>
      input[start + i + 1].trim().split(" ").map(Number)
    );
  };

  const A = readMatrix(0, N);
  const B = readMatrix(N, input.length - N - 1);

  const addMatrices = (matrix1, matrix2) =>
    matrix1.map((row, i) => row.map((val, j) => val + matrix2[i][j]));

  const resultMatrix = addMatrices(A, B);

  resultMatrix.forEach((row) => console.log(row.join(" ")));
} catch (err) {
  console.log(err.message);
  console.log(err.message);
}
