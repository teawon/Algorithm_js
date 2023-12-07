/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

 /* 
    무식하게 n번 돌리면 시간초과가 발생한다.
    -> 분할 정복 방법을 활용해, 2^4 = 4^2 = 16^1 임을 활용하자
 */
var myPow = function(x, n) {

    function pow(value, n){
        if(n <= 1) return value;
        return n % 2 === 0 ? pow(value*value , n/2) : value * pow(value*value , Math.floor(n/2))
    }

    if(n === 0) return 1;

    if(n < 0) {
       return pow(1/x, -n);
    }

    return pow(x,n);
};