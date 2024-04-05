// 프로그래머스 - 181942 - 문자열 섞기

function solution(str1, str2) {
    var answer = "";

    // string을 배열로 바꾼후 map을 활용해 str1의 값에 str2값을 합쳐서 return
    var arr = [...str1].map((element, index) => {
        return element + [...str2][index];
    });
    // 배열을 다시 string으로 변환
    answer = arr.join("");

    return answer;
}

// 다른분의 코드 같은 방법인데 더 간단하게도 가능하다.
// function solution(str1, str2) {
//     return [...str1].map((x, idx) => x + str2[idx]).join("");
// }
