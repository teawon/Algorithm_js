/**
 * @param {number[][]} grid
 * @return {number}
 */

 // 1. 첫번째로 만나는 섬외각을 다 2로 바꾸기
 // 2. 특정 지점에서 BFS를 돌리며 같은2라면 동일한거리, 아니라면 +1씩 하기
 /*
  [ 0, 0, 0, 2, 2 ],
  [ 0, 0, 0, 2, 0 ],
  [ 0, 0, 0, 2, 2 ],
  [ 0, 0, 1, 0, 2 ],
  [ 0, 0, 1, 1, 0 ]

  -> 정답은 1인데, 시작 2의 위치에따라 거리가 다 다르다..
  -> 2번을 큐에 다 담고, 1싸이클씩 돌려본다. 1step, 2step.... 
  (특정 지점에서 거리를 계산하는게 아니라, "여러 출발지"를 다 고려했을때 최단거리를 구하는 방법)
    
 */
var shortestBridge = function(grid) {
    
    const n = grid.length;

    let isFound = false;
    const queue = [];

    const dx = [0, 1, 0, -1];
    const dy = [-1,0,1,0];


    function dfs(y,x){
        for(let i=0; i<4; i++){
            ny = y + dy[i];
            nx = x + dx[i];
            if(ny >= 0 && ny < n && nx >= 0 && nx < n && grid[ny][nx] === 1){
                queue.push([ny,nx]);
                grid[ny][nx] = 2;
                dfs(ny,nx);
            }
        }
    }
    
    

    // 처음 발견되는 지점으로부터 순회를 시작할 시작지점들을 다 큐에 넣는다. (각 모서리에서 거리를 계산)
    for(let y=0; y<n; y++){
        if(isFound){
            break;
        }
        for(let x=0; x<n; x++){
            if(grid[y][x] === 1){
                grid[y][x] = 2;
                queue.push([y,x]);
                dfs(y,x);
                isFound=true;
                break;
            }
        }
    }


  

    let step = 0;

    while(queue.length > 0){

        let size = queue.length;

        for(let c=0; c<size; c++){
            const [y,x] = queue.shift();

            for(let i=0; i<4; i++){
                const ny = y + dx[i];
                const nx = x + dy[i];
                if(ny >= 0 && ny < n && nx >= 0 && nx < n && grid[ny][nx] !== 2){
                    if(grid[ny][nx] === 1){ // 또 다른 섬 발견시
                        return step;
                    }
                    grid[ny][nx] = 2;
                    queue.push([ny,nx]);
                }
            }
        }
        step++;
    }


    return -1;
 }; 