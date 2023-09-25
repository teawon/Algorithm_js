/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    // 1차원으로 계산하고, 그 값을 2차원 배열에 대입해서 풀이하면?

    const row = matrix.length;
    const col = matrix[0].length;

    let left = 0;
    let right = row*col - 1;

    while(left <= right){
        const mid = Math.floor((left+right)/2);

        const curR = Math.floor(mid/col); // 0,3이 나와야 함
        const curC = mid%col;

        console.log(curR,curC)
        if(matrix[curR][curC] === target){
            return true;
        }

        if(matrix[curR][curC] < target){
            //더 큰 범위를 탐색한다
            left = mid + 1;
        }
        else{
            right = mid -1;
        }
    }
    return false;
};