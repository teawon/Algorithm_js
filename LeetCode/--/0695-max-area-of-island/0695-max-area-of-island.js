/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const visited = Array(m).fill().map(() => Array(n).fill(false));

    const dx = [0,1,0,-1];
    const dy = [-1,0,1,0];

    let maxCount = 0;

    function checkLandCount(row,col){
        
        visited[row][col] = true;
        const queue = [[row,col]];

        let count = 1;
        
        while(queue.length > 0){

            const [y,x] = queue.shift();
         
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

    return count;

    }

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] === 1 && !visited[i][j]){
                maxCount = Math.max(maxCount , checkLandCount(i,j));
            }
        }
    }

    return maxCount;
};