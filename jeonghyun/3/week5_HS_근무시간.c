
int main(void) {
    int total = 0;

    // 5번 반복해서 날짜 입력 받기
    for (int i = 0; i < 5; i++) {
        // 출 퇴근 시간 입력 받기
        int stime, sminute, etime, eminute;
        scanf("%d:%d %d:%d", &stime, &sminute, &etime, &eminute);

        // 만약 출근 시간의 분이 퇴근 시간의 분보다 크다면 시간 -1, 분 +60
        if (sminute > eminute) {
            etime -= 1;
            eminute += 60;
        }

        // 출근 시간과 퇴근 시간을 분 단위로 변환 후 total에 저장
        // (퇴근 분 - 출근 분) + (퇴근 시 - 출근 시) * 60
        total += (eminute - sminute) + (etime - stime) * 60;
    }

    printf("%d\n", total);

    return 0;
}