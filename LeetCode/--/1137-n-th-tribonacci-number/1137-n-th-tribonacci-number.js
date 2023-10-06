/**
 * @param {number} n
 * @return {number}
 */


 /**
    말 그대로 피보나치 수열 + 정해진 문제에 맞게 약간의 수정
  */
var tribonacci = function(n) {
    
    let result = [0,1,1];

    for(let i=3; i<38; i++){
        result[i] = result[i-2]+result[i-1]+result[i-3];
    }

    return result[n];
};