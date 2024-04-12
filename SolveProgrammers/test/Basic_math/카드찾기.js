//등차수열을 이루는 4개의 숫자 카드를 받았는데, 한 카드를 잃어버렸다. 잊어버린 카드를 찾아주자

function answer(a, b, c) {
  num = [a, b, c];
  num.sort((x, y) => x - y);

  let d = 0;
  for (let i = 1; i < num.length; i++) {
    d += num[i] - num[i - 1];
  }
  d /= num.length;

  let index = num[2] - num[1] > num[1] - num[0] ? 2 : 1;

  number = num[0] + d * index;

  return number;
}

let input = [
  [1, 7, 10],
  [3, 8, 18],
  [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
