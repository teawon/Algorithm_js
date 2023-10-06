/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

 // 모든 경로니까 dfs아닌가?
var allPathsSourceTarget = function(graph) {

    const len = graph.length;
    const visited = Array(len).fill(false);
    const result = [];
    
    function dfs(cur, path){
        if(cur === len-1){
            result.push(path);
            return;
        }
        for(const next of graph[cur]){
            if(!visited[next]){
                visited[next] = true;
                dfs(next, [...path,next]);
                visited[next] = false;
            }
        }
    }

    dfs(0,[0]);

    return result;

};