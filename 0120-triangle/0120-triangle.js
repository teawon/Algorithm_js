/**
 * @param {number[][]} triangle
 * @return {number}
 */


// 특정 값 [n][n]은 [n-1][n] [n-1][n-1]중에 작은값과 자신 값을 더한 값이다.
// 특정 행에 대해 최소값을 전부 연산후 마지막행중 가장 작은값을 계산하기

// 실수했던점 - let left = list[j-1] || MAX -> || 연산자는 0, false, null, NaN등에 대해 모두 처리한다.

var minimumTotal = function(triangle) {
    
    const size = triangle.length;
    const MAX = Number.MAX_VALUE

    let list = [triangle[0][0]];

    for(let i=1; i<size; i++){

        let nextRow = []

        for(let j=0; j<i+1; j++){
            let left = list[j-1] === undefined ? MAX : list[j-1];
            let right = list[j] === undefined ? MAX : list[j];

            nextRow[j] = Math.min(left,right) + triangle[i][j]
        
        }
        list = nextRow; 
        // console.log(list)
    }


    return Math.min(...list)
};