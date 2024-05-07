// 프로그래머스 - 181927 - 마지막 두 원소

// 배열.at(): 해당 인덱스에 있는 항목을 반환
// 음수를 쓸 경우 뒤에서 부터 가져온다.
function solution(num_list) {
    num_list.push(num_list.at(-2) < num_list.at(-1) ? num_list.at(-1) - num_list.at(-2) : num_list.at(-1) * 2);

    return num_list;
}

// 좋아요를 아주 많이 받은 코드 이것이 자바스크립트..? 놀랍다,, 잼있다,,
// reverse()로 배열을 거꾸로 한 다음
// 구조분해할당으로 마지막과 마지막전 값을 비교 후 배열에 추가한다.
// function solution(num_list) {
//     const [a, b] = [...num_list].reverse();
//     return [...num_list, a > b ? (a-b):a*2];
// }
