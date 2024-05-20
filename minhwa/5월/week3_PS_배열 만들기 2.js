// 프로그래머스 - 181921 - 배열 만들기 2

function solution(l, r) {
    // r부터 l까지의 배열을 만든 후 filter를 활용해
    // 정규 표현석으로 문자열에 0과 5만 포함된 문자만 거른다.
    const arr = [...Array(r + 1 - l)].map((_, i) => i + l).filter((e) => /^[50]+$/.test(e));
    return arr.length ? arr : [-1];
}
