// 프로그래머스 - 181948 - 특수문자 출력하기

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("close", function () {
    // \'를 붙여서 쓸 경우 \가 특수문자가 되어 \\를 두번 쓰고 ``를 써야한다.
    console.log(`!@#$%^&*(\\'"<>?:;`);
});
