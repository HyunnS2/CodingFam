// 프로그래머스 - 181939 - 더 크게 합치기

function solution(a, b) {
    // 숫자를 문자로 바꾼 후 합쳐서 다시 Number로 변환
    ab = Number(a.toString() + b.toString());
    ba = Number(b.toString() + a.toString());

    // 삼항 연상자 ? : 를 이용했다.
    return ab > ba ? ab : ab == ba ? ab : ba;
}

// 이런 방법이 있다고 충격과 공포였다.
// Math 함수를 사용해 .max 가장 큰 값을 뱉는다.
// `` 백틱: 문자열 표기법
// 백틱에서 ${} 사이에 변수나 연산을 넣을 수 있다.
// 백틱안에서 숫자를 붙인다음 string으로 나오는 값을 Numer로 정수로 변환 시켜준 값중에 더 큰값이 나온다.
// function solution(a, b) {
//     return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
// }
