// 프로그래머스 - 181920 - 카운트 업

function solution(start_num, end_num) {
    return [...Array(end_num + 1 - start_num)].map((_, i) => i + start_num);
}

//.fill()을 사용하여 Array를 만들 수 도 있다.
// function solution(start, end) {
//     return Array(end-start+1).fill(start).map((x,idx) => x+idx);
// }
