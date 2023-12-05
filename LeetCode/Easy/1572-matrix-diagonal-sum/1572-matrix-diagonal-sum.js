/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    // 0 0 , 1 1 , 2,2 (->) 
    // 2 0,  1 1 , 0,2 (<-)
    const len = mat.length
    let sum = 0;

    for(let i=0; i<len; i++){
        // 대각(<- 방향)
        sum += mat[i][i];
        if(i === len-i-1) continue;
        // 대각(-> 방향)
        sum += mat[len-i-1][i];
    }

    return sum;
};