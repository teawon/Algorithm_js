/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array(m).fill().map(() => Array(n).fill(false));

    const dx = [0,1,0,-1];
    const dy = [-1,0,1,0];

    // 우선 DFS로 각 1의 묶음 + 개수를 체크
    // 이때, 1의 묶음중 하나라도 벽과 닿아있다면 false처리

    let result = 0;

    function bfs(row,col){
        
        visited[row][col] = true;
        const queue = [[row,col]];
        let flag = true;
        let count = 1;
        
        while(queue.length > 0){

            const [y,x] = queue.shift();
            if(y === 0 || y === m-1 || x === 0 || x === n-1){
                flag = false;
             }

            for(let i=0; i<4; i++){
                const ny = y + dy[i];
                const nx = x + dx[i];
                
            if(ny >=0 && ny < m && nx >= 0 && nx < n && grid[ny][nx] === 1 && !visited[ny][nx]){
                visited[ny][nx] = true;
                queue.push([ny,nx]);
                count++;
            
            }
        }
    }

    return [flag, count];

    }

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] === 1 && !visited[i][j]){
                const [flag, count] = bfs(i,j);
                if(flag){
                    result += count;
                }
            }
        }
    }

    return result;
};