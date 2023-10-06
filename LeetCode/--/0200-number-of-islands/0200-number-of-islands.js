/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dx=[0,1,0,-1];
    const dy=[-1,0,1,0];

    const visited = Array(m).fill().map(()=> Array(n).fill(false));

    function dfs(y,x){
 
        for(let i=0; i<4; i++){
            const ny = y+dy[i];
            const nx = x+dx[i];

            if(ny >=0 && ny < m && nx>=0 && nx < n && grid[ny][nx] === "1" &&!visited[ny][nx]){
                visited[ny][nx] = true;
                dfs(ny,nx);
            }
        }
    }

    let count = 0;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(grid[i][j] === "1" && !visited[i][j]){
                visited[i][j] = true;
                dfs(i,j);
                count++;
            }
        }
    }

    return count;
};