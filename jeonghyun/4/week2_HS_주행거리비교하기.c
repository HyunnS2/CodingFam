// 소프티어 - lv.1 주행거리 비교하기 

int main(void)

{

    int A,B;

    scanf("%d %d", &A, &B);

    if(A>B){

        printf("A");

    }else if(B>A){

        printf("B");

    }else{

        printf("same");

    }

    return 0;

}