/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let result = [0,1]

    for(let i=2; i<=30; i++){
        result[i] = result[i-2]+result[i-1];
    }

    return result[n];
};