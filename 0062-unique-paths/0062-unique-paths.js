/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

 /**
    확률 문제 아닌가?
    전체 a,b,a,b,a,a,b,b,b....중에 a가 들어갈 수 있는 경우의 수는 m+n C n ?
    m+n-2 C n-1 

    전부 곱하고 전부 나누면 연산이 비효율적일까?
  */
var uniquePaths = function(m, n) {

    moveCount = m+n-2;
    minVal = Math.min(m,n) - 1;

    var result = 1;

     for(let i=minVal; i>0; i--){
        result /= i;
    }
    
    for(let i=0; i<minVal; i++){
        result *= (moveCount-i);
    }

    return result
    
    
};