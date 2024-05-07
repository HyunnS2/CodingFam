// 프로그래머스 - 181950 - 문자열 반복해서 출력하기

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = line.split(" ");
}).on("close", function () {
    str = input[0];
    n = Number(input[1]);
    //repeat(): 반복 횟수 만큼 붙여서 출력
    console.log(str.repeat(n));
});
