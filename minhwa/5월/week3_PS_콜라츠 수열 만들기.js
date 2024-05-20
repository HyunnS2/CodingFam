// 프로그래머스 - 181919 - 콜라츠 수열 만들기

// while을 사용하여 반복문을 만들었다.
function solution(n) {
    var arr = [n];
    while (n !== 1) {
        if (n % 2 === 0) n = n / 2;
        else n = 3 * n + 1;
        arr.push(n);
    }
    return arr;
}

// 재귀함수 풀이 법
// 재귀함수 란 자신을 다시 호출하는 구조로 만들어진 함수로
// 종료 조건을 설정해주지 않으면 무한 반복을 하게 된다.
// function solution(n, arr = []) {
//     arr.push(n);
//     if (n === 1) return arr;
//     if (n % 2 === 0) return solution(n / 2, arr);
//     return solution(3 * n + 1, arr);
// }
