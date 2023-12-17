const fs = require('fs');

//백준 제출용
//const input = require('fs').readFileSync('/dev/stdin').toString();

//문제풀이용
const input = fs.readFileSync('example.txt').toString()

const count = Number(input) / 4;
let printLong = '';

for (let i = 1; i <= count; i++) {
    printLong += 'long ';
}

console.log(printLong + 'int');
