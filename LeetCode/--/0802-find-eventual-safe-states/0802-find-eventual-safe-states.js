/**
 * @param {number[][]} graph
 * @return {number[]}
 */

// 답지풀이
var eventualSafeNodes = function(graph) {
    const len = graph.length;
    const visited = Array(len).fill(0);

    const result = [];

    for(let i=0; i<len; i++){
        if(isSafe(i)){
            result.push(i);
        }
    }
    // 0 : notVisited  
    // 1 : visited
    // 2 : 안전노드
    function isSafe(node){
        
        if(visited[node] !==0){
            return visited[node] === 2;
        }

        visited[node] = 1;

    
        for (const nextNode of graph[node]) {
            // 방문했는데 1이 나왔다는 의미는 해당 노드는 안전노드가 아니라는 의미
            if (visited[nextNode] === 1) {
                return false;
            }
            // 해당 노드에 대해 탐색 시작
            if(!isSafe(nextNode)){
                return false;
            }
        }

        visited[node] = 2;
        return true;
    }
    return result;
};