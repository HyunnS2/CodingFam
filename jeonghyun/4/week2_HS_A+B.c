// 소프티어 - lv.1 A+B

int main(void)
{
    int T;
    int sum = 0;

    scanf("%d ",&T);

    for(int i=0;i<T;i++){

        int A,B;

        scanf("%d %d", &A, &B);

        sum = A+B;

        printf("Case #%d: %d\n", i+1 , sum);
    }
    

   return 0;
}