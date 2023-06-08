/**
 * @param {number[][]} rooms
 * @return {boolean}
 */


 // 각 방을 분기점으로 다 돌았을때 한번만 방문한 곳이 있다면 false이다.
 // 근데 처음 들어간 방에서 다른 방을 다 탐색할 수 있을 수 있기때문에 처음에 대한 예외처리만 추가
var canVisitAllRooms = function(rooms) {
    
      function visitRoom(room){

        if(visited[room] > 1){
            return;
        }
        visited[room]++;

        for(let key of rooms[room]){
            if(visited[key]<2 && key!== room){
                visitRoom(key);
            }  
        }
    }


    const len = rooms.length;
    let visited = Array(len).fill(0);


    // 처음 들어간곳에서 모든곳을 방문하는 예외케이스 테스트
    visitRoom(0);
    let flag = false;
    for(let i=0; i<len; i++){
        if(visited[i] === 0){
            flag = true;
        } 
    }
    if(!flag){
        return true;
    }

    // 예외케이스가 아니라면 각 방문을 한번씩 다 방문했을때 1번인곳이 있는지 확인
    visited = Array(len).fill(0);
    for(let i=0; i<len; i++){
        visitRoom(i);
    }

 
    for(let i=0; i<len; i++){
        if(visited[i]<2) {
          return false;
        }        
    }

    return true;
    
};