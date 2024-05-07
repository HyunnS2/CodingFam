// 프로그래머스 - 181945 - 문자열 돌리기

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = [line];
}).on("close", function () {
    str = input[0];
    // 문자열을 한글자씩 배열로 만든 후 forEach로 하나씩 찍어주었다.
    // forEach(()=>{}): for과 같은 순환문
    [...str].forEach((element) => {
        console.log(element);
    });
});
