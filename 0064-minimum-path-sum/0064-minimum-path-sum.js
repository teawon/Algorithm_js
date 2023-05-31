/**
 * @param {number[][]} grid
 * @return {number}
 */

 /**
    DFS로 모든 경로를 찾기 + DP?
    (a,b좌표일때) 미리 계산된 좌표가 있는지 확인한다.
    BFS인가? - 단순히 짧은곳이 정답은 아니다. 다 찾아봐야 함

  */
var minPathSum = function(grid) {
    const map = [];
    const row = grid.length
    const col = grid[0].length

    // 전체 최단경로를 일단 저장
    for (let i = 0; i < row; i++) {
        const row = Array(col).fill(200*200*200);
        map.push(row);
    }

    map[0][0] = grid[0][0];
   
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            if(i > 0){
                map[i][j] = Math.min( map[i][j], map[i-1][j] + grid[i][j])
            }

            if(j > 0){
                map[i][j] = Math.min( map[i][j], map[i][j-1] + grid[i][j])
            }
           
        }
    }
    return map[row-1][col-1]
        
};

/**
    개선점이 있는지 찾아보기 -> 일단 DPS를 쓰려다가 단순히 for문으로 순회가능해서 바꾸긴함
    -> 최단경로 알고리즘은 왜 사용할수없는지?
    -> 다른사람 답 찾아보기
 */