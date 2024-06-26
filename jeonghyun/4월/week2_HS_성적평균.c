// 소프티어 - lv.2 성적 평균

#include <cstdio>
#include <algorithm>

using namespace std;

int N,W,ans;

// pair 배열에 { 무게당 가격(Pi),금속의 무게(Mi)} 저장
pair<int,int> v[1000000];

int main(){

    scanf("%d%d",&W,&N);

    for(int i=0;i<N;i++){
        int m,p;
        scanf("%d%d",&m,&p);
        v[i]={p,m};
    }

    sort(v,v+N);

    for(int i=N-1;i>=0,W>0;i--){
        int k = min(v[i].second,W);
        W-=k;
        ans+=k*v[i].first;
    }

    printf("%d",ans);
}