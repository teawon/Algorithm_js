function solution(maps) {
    var answer = 0;
    
    const n = maps.length;
    const m = maps[0].length;
    
    const distance = Array(n).fill().map(() => Array(m).fill(0));
    const queue = [];
    
    const dx = [0,1,0,-1];
    const dy = [-1,0,1,0];
    
    distance[0][0] = 1;
    queue.push([0,0]);

    
    while(queue.length > 0){
        const [y,x] = queue.shift();
        
        for(let i=0; i<4; i++){
            const ny = y+dy[i];
            const nx = x+dx[i];
            
            if(ny>=0 && ny< n && nx>=0 && nx<m && distance[ny][nx] === 0 && maps[ny][nx]===1){
         
                queue.push([ny,nx]);
                distance[ny][nx] = distance[y][x]+1;
            }
        }
    }
    

    return distance[n-1][m-1] === 0 ? -1 :  distance[n-1][m-1]
    
    
}