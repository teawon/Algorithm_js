/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    // 둘다 짝수 : 2k - 2n  2(k-n) 4-2 = 1 , 10-0 = 5 
    // 둘다 홀수 11 - 1 -> 1 3 5 7 9 11   
    // 짝수 홀수 3-0 = 2 , 3-2 => 1 // 10 - 1 -> 1 3 5 7 9 
    const gap = high - low;

    if(low % 2 === 0 && high % 2 === 0) return gap / 2;

    return Math.floor(gap / 2) + 1
}