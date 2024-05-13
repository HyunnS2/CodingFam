// 프로그래머스 - 181923 - 수열과 구간 쿼리 2

function solution(arr, queries) {
    // map으로 새로운 배열을 return 해줄 것이다.
    return queries.map(([s, e, k]) => {
        var a = [];
        for (let i = s; i <= e; i++) {
            if (arr[i] > k) {
                // s ≤ i ≤ e인 모든 i에 대해 k보다 큰 값들을 a에 담아주고
                a.push(arr[i]);
            }
        }
        // a 배열에서 가장 작은 값을 return 해준다.
        return a.length > 0 ? Math.min(...a) : -1;
    });
}

// slice와 filter, sort를 사용하여 푼 코드이다.
// arr 배열을 s부터 e까지 잘라준 다음에
// filter를 통해 k보타 큰 값들을 거른 후
// sort로 작은 수 부터 배열을 정렬 시켜주고
// 배열이 비어있으면 -1을 반환하도록
// function solution(arr, queries) {
//     return queries.map(
//         ([s, e, k]) =>
//             arr
//                 .slice(s, e + 1)
//                 .filter((n) => n > k)
//                 .sort((a, b) => a - b)[0] || -1
//     );
// }
