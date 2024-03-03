const fs = require("fs");

try {
  //문제풀이용
  const input = fs.readFileSync("SolveBaekjoon/answer/level6/n1316.txt", "utf-8").trim().split("\n");

  // 백준풀이용
 // const input = fs.readFileSync('dev/stdin').trim().split('\n');
  const words = input.slice(1); // 첫 번째 줄은 단어의 개수

  const isGroupWord = (word) => {
    const visited = new Set();
    let prevChar = "";

    for (let i = 0; i < word.length; i++) {
      const currentChar = word[i];

      if (visited.has(currentChar) && currentChar !== prevChar) {
        return false;
      }

      visited.add(currentChar);
      prevChar = currentChar;
    }

    return true;
  };

  const countGroupWords = (words) => {
    let count = 0;

    for (const word of words) {
      if (isGroupWord(word)) {
        count++;
      }
    }

    return count;
  };

  const result = countGroupWords(words);
  console.log(result);
} catch (err) {
  console.log(err.message);
}
