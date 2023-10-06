/**
 * @param {character[][]} matrix
 * @return {number}
 */

 // BFS를 돌려서 각 뭉텅이를 찾기?? 찾은다음에는? -> DP를 활용한 풀이법
 // [답지보고 품 - 나중에 다시 풀것 (6/2)]
 
var maximalSquare = function(matrix) {

    const r = matrix.length
    const c = matrix[0].length

    const dp = Array(r+1).fill(0).map(() => Array(c+1).fill(0))
    let maxLength = 0

    for(let i=1; i<r+1; i++){
        for(let j=1; j<c+1; j++){
            if(matrix[i-1][j-1] === "1"){
                dp[i][j] = Math.min(dp[i-1][j],dp[i-1][j-1], dp[i][j-1])+1;
                maxLength = Math.max(maxLength,  dp[i][j]);
            }
        }
    }
    
    return maxLength*maxLength
};