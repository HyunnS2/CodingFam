// 프로그래머스 - 181930 - 주사위 게임 2

// 근본 없이 짠 나의 코드가 마음에 들지 않는다.
function solution(a, b, c) {
    return a === b && a === c ? 27 * a ** 6 : a === b || a === c || b === c ? (a + b + c) * (a ** 2 + b ** 2 + c ** 2) : a + b + c;
}

// 좋아요를 제일 많이 받은 풀이
// 짧게 쓰는 것만이 좋은 코드가 아닌 재활용 가능한 코드를 짜는 방법을 더 생각해봐야 겠다는 생각이 들었다.
// const solution = (a, b, c) => {
//     // Set(배열)으로 중복된 값을 제거하는 새로운 배열 생성
//     const set = new Set([a, b, c]);
//     // 새로운 배열의 길이에 따라
//     switch ([...set].length) {
//         // 중복된 값이 3개일 경우
//         case 1:
//             return calculate([a, b, c], 3);
//         // 2개일 경우
//         case 2:
//             return calculate([a, b, c], 2);
//         // 한개도 없을 경우
//         case 3:
//             return calculate([a, b, c]);
//     }
// };

// const calculate = (inc, n = 1) => {
//     const [a, b, c] = inc;
//     let result = 1;
//     // 중복된 값의 길이만큼 for문 실행
//     for (let i = 1; i <= n; i++) {
//         // Math.pow(a, i): a의 i제곱을 만들어 준다.
//         result *= Math.pow(a, i) + Math.pow(b, i) + Math.pow(c, i);
//     }

//     return result;
// };
