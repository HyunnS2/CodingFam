// 프로그래머스 - 181943 - 문자열 겹쳐쓰기

function solution(my_string, overwrite_string, s) {
    var answer = "";
    // substr(a, b): a부터 b까지 문자열 자르기
    answer = my_string.substr(0, s) + overwrite_string + my_string.substr(s + overwrite_string.length);
    return answer;
}
