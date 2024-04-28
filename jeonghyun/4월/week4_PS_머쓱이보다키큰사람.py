# 프로그래머스 - 머쓱이보다 키 큰 사람


# 1번 풀이 = 내 풀이 
# 친구들 키가 담긴 정수 배열 array , 머쓱이의 키 height 
def solution(array, height):
    
    answer = 0
    
    # 전체 키 배열에서 머쓱이보다 큰 사람이 있을 경우 answer + 1
    for i in array:
        if i > height:
            answer += 1 
            
    #  answer = 키순서 반환
    return answer


# 그 외 참고 풀이
# 2번 풀이
#  좋아요가 가장 많았던 풀이 ,, 나는 평범하게 for문 써서 했는데 sort함수로 간결하게 짰다.
# 그치만 간결한 코드 라인 수에 비해 시간복잡도가 그리 좋진 않다는 말이 많다!

def solution(array, height):
    array.append(height)
    array.sort(reverse=True)
    return array.index(height)
# 머쓱이 키를 array에 추가 한 후, sort 함수로 정렬을 하고 머쓱이 키의 index를 구했다!


# 3번 풀이 
# 위 코드보다 시간복잡도가 좋다는 댓글이 많았던 풀이
# 내가 푼 코드를 내포 방식을 이용해서 더 간결하게 수정한 것 같다.
# 예전에 for문 써서 1번 처럼 코드 짤때 마다, 이렇게 내포 방식으로 풀면 더 좋다는 말을 많이 들었던 기억이 나서 뜨끔했다...!! 배웟던걸 좀 기억하고 잘 써먹어야지...  
def solution(array, height):
    return sum(1 for a in array if a > height)
