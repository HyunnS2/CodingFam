// 프로그래머스 - 181934 - 조건 문자열

function solution(ineq, eq, n, m) {
    // ``(백틱)으로 식을 문자열로 만듦
    // eval(문자열): 문자열을 자바스크립트로 실행
    // +(): true를 1로 false를 0으로 출력
    return +eval(`${n} ${ineq}${eq === "=" ? eq : ""} ${m}`);
}

// 좋아요가 많은 방법이다.
// const operations = {
//   '>=': (n, m) => n >= m,
//   '<=': (n, m) => n <= m,
//   '>!': (n, m) => n > m,
//   '<!': (n, m) => n < m,
// };

// function solution(ineq, eq, n, m) {
//   const op = operations[ineq + eq];
//   return Number(op(n, m));
// }
