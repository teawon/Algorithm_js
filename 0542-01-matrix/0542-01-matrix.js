/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

// 1을 큐에다 넣고, 각 스텝을 돌리며 BFS로 거리 계산

var updateMatrix = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const distance = Array(m).fill().map(() => Array(n).fill(-1));

    const dx = [0,1,0,-1];
    const dy = [-1,0,1,0];

    const queue = [];

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){

            if(mat[i][j] === 0){
                queue.push([i,j]);
                distance[i][j] = 0;
            }
        }
    }

    let step = 1;
    while(queue.length > 0){
        const len = queue.length;

        for(let i=0; i<len; i++){

            const[y,x] = queue.shift();

            for(let d=0; d<4; d++){
                const ny = y+dy[d];
                const nx = x+dx[d];
                
                if(ny >=0 && ny <m && nx >=0 && nx < n && distance[ny][nx] === -1){
                        distance[ny][nx] = step;
                        queue.push([ny,nx]);
                }
            }
        
        }
        step++;
    }
    return distance;
};