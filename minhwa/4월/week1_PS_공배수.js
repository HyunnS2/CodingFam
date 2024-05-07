// 프로그래머스 - 181936 - 공배수

function solution(number, n, m) {
    return number % n === 0 ? (number % m === 0 ? 1 : 0) : 0;
}

// 논리로 하는 이런 방법도 있다.
// return +!(number % n || number % m);
