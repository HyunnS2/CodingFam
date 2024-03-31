// 프로그래머스 - 181951 - a와 b 출력하기

// 코드 설명과 함께 코드 작성
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log("a = " + Number(input[0]) + "\n" + "b = " + Number(input[1]));
});