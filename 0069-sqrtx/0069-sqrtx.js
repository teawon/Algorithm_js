/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    // 각 제곱근을 계싼하며, x에 대한 계산을 이진탐색으로 풀이

    let left = 0;
    let right = x; //2^31의 제곱은 오버플로우 발생하지 않나? 생각했는데, 어처피 2로 나눠서 제곱하므로 괜찮다.

    while(left<=right){
        let mid = Math.floor((left+right)/2);
        const pow = mid*mid;

        if(pow == x){
            return mid;
        }

        if(pow <= x){
            // 크거나 같으면, 더 큰 범위 (오른쪽 탐색)
           left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
  
    return right;
     
};