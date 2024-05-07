// 프로그래머스 - 181935 - 홀짝에 따라 다른 값 반환하기

function solution(n) {
    var answer = 0;

    for (let i = 0; i <= n; i += 2) {
        n % 2 !== 0 ? (answer += i + 1) : (answer += i * i);
    }

    return answer;
}

// n이 짝수일 때는 등차수열의 합 공식을 적용하였고, n이 홀수일 때는 자연수 거듭 제곱의 합을 구하는 공식을 적용한 수학적 풀이방법..
// function solution(n) {
//     if(n%2===1)
//       return  (n+1)/2*((n + 1)/2) ;
//     else
//       return   n*(n+1)*(n+2)/6;
// }
