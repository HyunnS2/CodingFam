// 프로그래머스 - 181938 - 두 수의 연산값 비교하기

function solution(a, b) {
    // 백틱 안에 서 숫자를 string으로 붙인 다음 다시 Number를 사용해 정수로 만들어주었다.
    // Math.max 함수를 사용해 가장 큰 값을 배출한다.
    return Math.max(Number(`${a}${b}`), 2 * a * b);
}

// Number(`${a}${b}`) 이 방법 대신에 Number(a+""+b) 이렇게도 가능하다.
