// 프로그래머스 - 181952 - 문자열 출력하기

// 코드 설명과 함께 코드 작성
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log(str);
});