/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    
 

    // 등차수열로 계속 연산하다가, n보다 커지면 그 시점의 값을 찾는 방법 - 오래걸리긴 함

    // let i = 1;
    // while(i*(i+1)/2 <= n){
    //     i++
    // }
    // return i-1;

    // n(n+1)/2 의 공식이 있으니, 이 공식을 사용해 n에 대한 이진탐색 풀이방법

    let left = 1;
    let right = n;

    while(left<=right){
        
        let mid = Math.floor((left+right)/2);

        if(mid*(mid+1)/2 <= n){
          // mid에 대한 등비수열값이 목표값인 100보다 작다면, 더 큰 범위의 n을 찾는다.
           left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }

    return left-1;


};