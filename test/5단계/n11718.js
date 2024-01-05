const fs = require('fs');

try{
    //문제풀이용
    const input = fs.readFileSync('answer/n11718.txt').toString().trim();

    //백준제출용
    //const input = fs.readFileSync('dev/stdin').toString().trim();

    console.log(input);

}catch(err){
    console.log(err.message)
}