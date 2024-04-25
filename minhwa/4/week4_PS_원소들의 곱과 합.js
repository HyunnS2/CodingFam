// 프로그래머스 - 181929 - 원소들의 곱과 합

// reduce()를 사용하여 하나의 값을 도출하였다.
// function solution(num_list) {
//     var product = num_list.reduce((acc, cur)=> acc *= cur);
//     var square = num_list.reduce((acc, cur)=> acc += cur)**2;

//     return +(product < square);
// }

// 위에 처럼도 가능하고 이렇게도 가능한데 어떤게 더 좋을 코드일까..
function solution(num_list) {
    return +(num_list.reduce((acc, cur) => (acc *= cur)) < num_list.reduce((acc, cur) => (acc += cur)) ** 2);
}
