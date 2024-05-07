// 프로그래머스 - 181931 - 등차수열의 특정한 항만 더하기

function solution(a, d, included) {
    // true 일 경우만 등차수열 값으로 바꾸고 false 일 경우는 0으로 반환 후
    // join("+"): 배열을 +를 붙인 string으로 만들어주고
    // eval(): string을 자바스크립트로 실행시켜주었다.
    return eval(included.map((e, i) => (e ? a + d * i : 0)).join("+"));
}

// reduce를 쓰면 더 간단하게 풀이할 수 있었다.
// .reduce((누적값, 현재값, index)=>{})
// function solution(a, d, included) {
//     return included.reduce((acc, flag, i) => {
//         return flag ? acc + a + d * i : acc
//     }, 0)
// }
