// 프로그래머스 - 181944 - 홀짝 구분하기

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = line.split(" ");
}).on("close", function () {
    n = Number(input[0]);
    // 짝수를 구할 때는 2와 나눴을 때 나머지값이 0이면 된다.
    // ?는 If와 같은 건데. 조건이 ? true이면실행 : false이면실행
    console.log(n % 2 === 0 ? n + " is even" : n + " is odd");
});
