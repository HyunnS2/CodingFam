// 프로그래머스 - 181925 - 수 조작하기 2

// 수 조작하기 1 에서 좋아요를 많이 받았던, 객체사용 풀이를 이용하였다.
const object = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
};

function solution(numLog) {
    return numLog.map((e, i) => object[e - numLog[i - 1]]).join("");
}
