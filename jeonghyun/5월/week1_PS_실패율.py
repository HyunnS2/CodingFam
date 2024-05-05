# 프로그래머스 - 2019 KAKAO BLIND RECRUITMENT - Lv.1 실패율

def solution(N, stages):
    
    answer = []
    dic = {}
    length = len(stages) # 총 사용자 수
    
    for i in range(1, N+1): # 무조건 1부터 , 마지막 순서 N까지 .
        
        # count = 각 스테이지에 머물러 있는 사용자 수
        count = stages.count(i)
        
        # stage1 의 실패율을 구하려면 ? -> count / stage1 에 도전한 사람 수
        # 도전한 사람 수는 스테이지가 바뀜에 따라 달라진다.
        # 실패율(fail) = count / length
        
        # else 단, 스테이지에 도달한 유저가 한명도 없을 경우 => 실패율은 0
        
        if length == 0:
            fail = 0
        else:
            fail = count/length
        
        # 다음 스테이지의 실패율 구하기 위해, 현재 스테이지에 머물러있는 사용자 수 빼기
        length -= count 
        dic[i] = fail
        
        
    S = sorted(dic.items() , key = lambda x :x[1], reverse=True) # 딕셔너리 정렬
    S = dict(S) # 딕셔너리 형태로 바꾸기
    answer = list(S.keys())
    
    return answer