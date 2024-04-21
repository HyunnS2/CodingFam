// 소프티어 - lv.1위험한효도

int main(void) {
    int a, b, d;
    int result = 0;
    int walk = 0;

    // 입력 값 읽기
    scanf("%d %d %d", &a, &b, &d);

    // 터치 전 = a 동안 남우 이동, b 동안 남우 대기
    while (1) {
        // a 인 동안
        for (int i = 0; i < a; i++) {
            walk++;    // 이동거리 1씩 추가
            result++;  // 총 소요시간 1씩 추가

            // 만약 이동거리와 거리가 같아지면 탈출
            if (walk == d) {
                break;
            }
        }

        // True인 동안 이동거리와 거리가 같아지면 탈출
        if (walk == d) {
            break;
        }

        // 아니면 총 소요시간에 b를 더해주기
        result += b;
    }

    // 다시 이동거리 0으로 리셋
    walk = 0;

    // 터치 후 : b 동안 남우 이동, a 동안 남우 대기 
    while (1) {
        // b 인 동안
        for (int i = 0; i < b; i++) {
            walk++;
            result++;
            if (walk == d) {
                break;
            }
        }

        if (walk == d) {
            break;
        }
        result += a;
    }

    printf("%d\n", result);

    return 0;
}