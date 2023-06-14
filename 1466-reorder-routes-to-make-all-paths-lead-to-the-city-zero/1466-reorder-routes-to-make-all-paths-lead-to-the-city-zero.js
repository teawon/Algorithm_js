/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
      
  const graph = Array(n).fill().map(() => []);
  const visited = Array(n).fill(false);
  for(const [start , end] of connections){
      graph[start].push([end,true]); // 정방향
      graph[end].push([start,false]); // 역방향
  }
  let count = 0;
  function dfs(curNode){

    visited[curNode] = true;

    for(const [next , direct]  of graph[curNode]){
      if(!visited[next]){ 
        
        if(direct){      // 방문하려는 목적지가 정방향이면 방향을 바꾼다.
            count++;
        }
        dfs(next);
      }
    }
  }
  dfs(0);
  return count;
      
}; 