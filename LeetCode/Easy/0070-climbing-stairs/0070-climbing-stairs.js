/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var result = []
    result[1] = 1;
    result[2] = 2;
    
    for(let i=3; i<46; i++){
        result[i] = result[i-1]+result[i-2];
    }

    return result[n]
};