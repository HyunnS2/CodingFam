// 프로그래머스 - 181949 - 대소문자 바꿔서 출력하기

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
    // split()를 사용해 문자열을 배열로 만든 후
    arr = str.split("");

    // for 반복문으로 값이 대문자일 경우 소문자로 변환 아닐 경우 대문자로 변환 후 출력
    // toUpperCase(): 대문자로 변환
    // toLowerCase(): 소문자로 변환
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            arr[i] = arr[i].toLowerCase();
        } else {
            arr[i] = arr[i].toUpperCase();
        }
    }

    console.log(arr.join(""));

    // 다른 사람의 코드를 보다가 안현서님의 코드가 매우 마음에 들었다.
    // split()를 사용하지 않아도 [...문자열]을 해도 바로 배열로 변환이 가능한것 같다.
    // console.log([...str].map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join(''))
});
