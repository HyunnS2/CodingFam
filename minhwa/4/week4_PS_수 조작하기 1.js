// 프로그래머스 - 181926 - 수 조작하기 1

// string을 배열로 만든 후 조건에 따라 n값 결과를 return
function solution(n, control) {
    [...control].map((e) => {
        switch (e) {
            case "w":
                return (n += 1);
            case "s":
                return (n -= 1);
            case "d":
                return (n += 10);
            case "a":
                return (n -= 10);
        }
    });

    return n;
}

// // 객체를 사용한 풀이 방법
// const operations = {
//     w: (n) => n + 1,
//     s: (n) => n - 1,
//     d: (n) => n + 10,
//     a: (n) => n - 10,
// };

// // operations['w'](누적값)은 operations.w(누적값) -> 누적값 +1을 반환
// function solution(n, control) {
//     return [...control].reduce((prev, op) => operations[op](prev), n);
// }
