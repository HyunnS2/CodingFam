// 프로그래머스 - 181922 - 수열과 구간 쿼리 4

function solution(arr, queries) {
    // forEach로 반복문을 돌려준 후
    queries.forEach(([s, e, k]) =>
        // 새로운 배열을 만들어 줄건데 s부터 e까지 만든다.
        // [...Array(x)].map((_, i)=>i)를 하면 x개의 배열을 i부터 만들어준다.
        [...Array(e + 1 - s)]
            .map((_, i) => i + s)
            // filter()로 i가 k의 배열인 것만 찾은 후
            .filter((i) => i % k === 0)
            // 해당되는 arr[i]에 +1을 해준다.
            .map((i) => arr[i]++)
    );
    return arr;
}
