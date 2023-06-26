/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    
    // 태평양 시작, 대서양에서 시작하는 BFS를 돌리고 카운트를 올려서 2인곳만 출력하기

    const m = heights.length;
    const n = heights[0].length;

    const dx = [0,1,0,-1];
    const dy = [-1,0,1,0];

    function bfs(row,col){

        let flagA = false;
        let flagB = false;

        const visited = Array(m).fill().map(() => Array(n).fill(false))
    
        visited[row][col] = true;
        const queue = [[row,col]];

        while(queue.length > 0){
        const [y,x] = queue.shift();

       

            if(y === 0 || x === 0){
                flagA = true;
            }

            if(y === m-1 || x === n-1){
                flagB = true;
            }
            
            for(let i=0; i<4; i++){
                const ny = y + dy[i];
                const nx = x + dx[i];
            
                if(ny >= 0 && ny < m && nx >= 0 && nx < n && !visited[ny][nx] && heights[ny][nx] <= heights[y][x]){
                    visited[ny][nx] = true;
                    queue.push([ny,nx]);
                }
            }
        }

        

        if(flagA && flagB){
            return true;
        }
        return false;
    }
  

    const result = []
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
           if(bfs(i,j)){
               result.push([i,j])
           }
        }
    }

    return result;

};