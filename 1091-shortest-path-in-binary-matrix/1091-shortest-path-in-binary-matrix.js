/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {

    const n = grid.length;

    if(grid[0][0] === 1){
        return -1;
    }

    const distance = Array(n).fill().map(() => Array(n).fill(-1));
    const dx = [0,1,1,1,0,-1,-1,-1];
    const dy = [-1,-1,0,1,1,1,0,-1];

    const queue = [[0,0]];
    distance[0][0] = 1;

    while(queue.length > 0){
        const [y,x] = queue.shift();

        for(let i=0; i<8; i++){
            const ny = y+dy[i];
            const nx = x+dx[i];


            if(ny >=0 && ny < n && nx >= 0 && nx < n && distance[ny][nx] === -1 && grid[ny][nx] === 0){
                distance[ny][nx] = distance[y][x]+1;
                queue.push([ny,nx]);
            }
        }
    }
    
    
    return distance[n-1][n-1] === 0? -1 : distance[n-1][n-1];
};