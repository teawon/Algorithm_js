/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    
    let count = 0;

    for(let i=0; i<grid.length; i++){
        // 각 그리드에 대해 음수 개수를 카운팅한다.

        let left = 0;
        let right = grid[i].length;
        
        while(left <= right){
            
            let mid = Math.floor((left+right)/2);
            
            if(grid[i][mid] < 0){
                // 0보다 작으면 왼쪽범위 탐색
                right = mid-1;
            }
            else{
                // 0보다 크면 오른쪽 범위 탐색
                left = mid + 1;
            }
        }
        

        if(grid[i][right+1] < 0){
        count = count + grid[i].length - (right+1);
        }
    }

    return count;
};