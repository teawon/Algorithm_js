/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // 반복문을 돌면서 0이 위치한 row, col정보를 저장
    // 다시 재 반복문을 돌면서 해당 row, col에 대해 0값으로 전부 변경?

    const zeroRow = new Set();
    const zeroCol = new Set();

    for(let r=0; r<matrix.length; r++){
        for(let c=0; c<matrix[0].length; c++){
            if(matrix[r][c] === 0){
              zeroRow.add(r);
              zeroCol.add(c);
            }
        }
    }

    for(let r=0; r<matrix.length; r++){
        for(let c=0; c<matrix[0].length; c++){
            if(zeroRow.has(r) || zeroCol.has(c)) matrix[r][c] = 0;
        }
    }
};