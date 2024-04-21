# 프로그래머스 - 피자나눠먹기(3)

import math

def solution(slice, n):
    return math.ceil(n/slice)

# import math를 쓰지 않은 풀이를 찾아보았더니, 좋아요가 제일 많았던 코드

def solution(slice, n):
    return ((n - 1) // slice) + 1