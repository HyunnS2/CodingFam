// 프로그래머스 - 181951 - a와 b 출력하기

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = line.split(" ");
}).on("close", function () {
    console.log("a = " + Number(input[0]) + "\n" + "b = " + Number(input[1]));
    // 이렇게도 가능하다.
    // console.log("a = " + Number(input[0]) + "\nb = " + Number(input[1]));
});
