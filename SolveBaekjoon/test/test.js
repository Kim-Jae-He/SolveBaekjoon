const fs = require("fs");

try {
  // 파일에서 입력값을 가져옴
  const input = fs
    .readFileSync("SolveBaekjoon/answer/test.txt")
    .toString()
    .split("\n");

  const solution = (s) => {
    let count = {};
    // 주어진 문자열에서 숫자만 추출하여 카운트
    for (let char of s) {
      if (!isNaN(parseInt(char))) {
        count[char] = (count[char] || 0) + 1;
      }
    }
    let maxCount = 0;
    let mostFrequentDigit = null;
    // 가장 많이 등장하는 숫자 찾기
    for (let digit in count) {
      if (count[digit] > maxCount) {
        maxCount = count[digit];
        mostFrequentDigit = digit;
      }
    }
    return mostFrequentDigit;
  };

  // input 배열의 각 요소에 대해 solution 함수를 호출하여 결과 출력
  input.forEach((s, index) => {
    const result = solution(s);
    console.log(` ${s} => 가장많이 나온숫자: ${result}`);
  });
} catch (err) {
  console.log(err.message);
}
