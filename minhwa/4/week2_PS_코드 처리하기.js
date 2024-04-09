// 프로그래머스 - 181932 - 코드 처리하기

function solution(code) {
    var ret = "";
    var mode = 0;
    // 배열로 만들어서 한글자 씩 확인을 하는 코드로 작성
    [...code].map((e, i) => {
        if (mode === 0) {
            e === "1" ? (mode = 1) : i % 2 ? "" : (ret += e);
        } else {
            e === "1" ? (mode = 0) : i % 2 ? (ret += e) : "";
        }
    });
    return !ret ? "EMPTY" : ret;
}

// 다른 사람의 깔끔한 풀이 방법
// function solution(code) {
//     // replaceAll(): 특정 문자열을 다른 문자열로 대체
//     // split(): 문자열을 배열로 만듬
//     // filter() : 배열을 조건에 맞는 요소로 이루어진 새로운 배열 생성
//     // 배열에서 1의 값을 삭제하면 모드가 바뀔 경우 idx -1값을 한것과 같게 된다.
//     var answer = code.replaceAll("1","").split("").filter((val, idx)=> idx%2 === 0).join("");
//     return answer.length > 0 ? answer : "EMPTY";
// }
