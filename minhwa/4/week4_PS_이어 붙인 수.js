// 프로그래머스 - 181928 - 이어 붙인 수

// filter로 홀수만 들어간 배열과 짝수만 들어간 배열을 만든다.
// 그다음 join으로 배열을 string으로 이어 붙여준 다음
// Number()로 숫자로 변환 후 더해주었다.
function solution(num_list) {
    return Number(num_list.filter((e) => e % 2 !== 0).join("")) + Number(num_list.filter((e) => e % 2 === 0).join(""));
}
