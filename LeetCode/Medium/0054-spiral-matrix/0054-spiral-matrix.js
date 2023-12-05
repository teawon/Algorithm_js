/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    
    const dx = [1,0,-1,0];
    const dy = [0,1,0,-1];

    let curDirct = 0;
    const place = {
        x : 0,
        y : 0
    }
    
    const rowLen = matrix.length;
    const colLen = matrix[0].length;
    const visited = Array(rowLen).fill().map(() => Array(colLen).fill(false));
   
    visited[0][0] = true;
    result.push([matrix[0][0]]);


    function notMove(y,x,dir){
        const ny = y+dy[dir];
        const nx = x+dx[dir];

        if(ny >= rowLen || ny < 0 || nx >= colLen || nx < 0) return true;
        if(visited[ny][nx]) return true;

        return false;
    }

    for(let num=1; num<rowLen * colLen; num++){

        // 이동방향으로 움직일 수 있는지 확인 후 회전
        while(notMove(place.y, place.x, curDirct)) curDirct = (curDirct+1) % 4;
        
        // 이동
        place.y += dy[curDirct];
        place.x += dx[curDirct];
        visited[place.y][place.x] = true;

        // 이동한 위치값 저장
        const curPlace = matrix[place.y][place.x];
        result.push(curPlace);
    }

    return result;
};