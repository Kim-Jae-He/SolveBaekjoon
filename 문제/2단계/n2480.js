const fs = require('fs');

//백준 제출용
// const input = fs.readFileSync("/dev/stdin").toString().split(' ');

//문제풀이용
const input = fs.readFileSync('example.txt').toString().split(' ');



const [A, B, C] = input;

if (A !== B && A !== C && B !== C) {
    console.log(A * 100);
} else if (A === B && B !== C) {
    console.log(1000 + A * 100);
} else if (B === C && C !== A) {
    console.log(1000 + C * 100);
} else if (C === A && A !== B) {
    console.log(1000 + C * 100);
} else {
    console.log(10000 + A * 1000);
}
