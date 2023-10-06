/**
 * @param {number[][]} matrix
 * @return {number}
 */

 // 이전 문제와 유사하다. 결국 특정 지점에서의 최소합은 위, 가운데, 오른쪽 블럭의 최소합과 자신의 합이므로 각각을 계산하면 될듯
var minFallingPathSum = function(matrix) {
    const n = matrix.length;
    const MAX = Number.MAX_VALUE

    let list = []
    for(let i=0; i<n; i++){
        list.push(matrix[0][i]);
    }


   
    for(let i=1; i<n; i++){
        let nextHeight = [] 

        for(let j=0; j<n; j++){
            let left = list[j-1] === undefined ? MAX : list[j-1]
            let middle = list[j] === undefined ? MAX : list[j]
            let right = list[j+1] === undefined ? MAX : list[j+1]

            let minSum = Math.min(left,middle,right) + matrix[i][j];

            nextHeight.push(minSum)
        }
        
        list = nextHeight;
    }

    return Math.min(...list)
};