/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    
    // 마찬가지로 일단 visited을 처리하면서 순회를 함
    // 근데 벽과 닿아있다면 처리하지 않는다는게 큰 특징..
    

    const m = grid.length;
    const n = grid[0].length;

    const visited = Array(m).fill().map(()=> Array(n).fill(false));
    let count = 0;

    const dx = [0, 1, 0 , -1];
    const dy = [-1 , 0 , 1 , 0];

    function checkClosedLand(row,col){
        visited[row][col] = true;
        let isClosed = false;

        const queue = [[row,col]]

        while(queue.length > 0){
            
            const [y,x] = queue.shift();

            if(y === m-1 || y === 0 || x === n-1 || x === 0){
                isClosed = true;
            }

            for(let i=0; i<4; i++){
                const ny = y + dy[i];
                const nx = x + dx[i];

                if(ny >= 0 && ny < m && nx >= 0 && nx < n && grid[ny][nx] === 0 && !visited[ny][nx]){
                    visited[ny][nx] = true;
                    queue.push([ny,nx]);
                }
            }
        }

     return isClosed;
    }

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] === 0 && !visited[i][j]){
        
                if(!checkClosedLand(i,j)){
                    count++;
                }
            }
        }
    }

    return count;
};