// 프로그래머스 - 181924 - 수열과 구간 쿼리 3

function solution(arr, queries) {
    // 구조분해 할당으로 변수값을 교환하는 방법을 사용했다.
    queries.forEach((e) => ([arr[e[0]], arr[e[1]]] = [arr[e[1]], arr[e[0]]]));
    return arr;
}

// 거의 정답에 다왔는데.. 아쉽다..
// forEach할 때 element를 바로 쓰는게 아니라 [a,b]이런 형식으로도 가능하다.
// function solution(arr, queries) {
//     queries.forEach( ([a,b]) => {
//         [arr[a],arr[b]] = [arr[b],arr[a]];
//     })
//     return arr;
// }
